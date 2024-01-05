import { AltRoute } from "@mui/icons-material";
import axios from "axios";

// 새로운 워크스페이스 생성 API name. desc. code + userid, 빙고 형용사 리스트 를 받아와서 post로 보낸다 ->
// response data를 받는다 (제대로 갔는지 확인용)
export const createWorkspace = async (newWorkspace) => {
    const postData = {
        userId: newWorkspace.userId,
        name: newWorkspace.name,
        description: newWorkspace.desc,
        picture: newWorkspace.picture,
        projectId: null,
        code: newWorkspace.code,
        tagList: [
            "서로에 대한 존중과 신뢰가 있는",
            "소통이 활발한",
            "개선과 혁신을 추구하는",
            "배우고자 하는",
            "열정 있는",
            "개인의 역할이 뚜렷한",
            "목표와 성과가 명확한",
            "모두가 협업하는",
            "일과 삶의 균형이 있는",
        ],
    };

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}project`,
            postData,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        alert("워크스페이스 생성 중 오류가 발생했습니다");

        throw error;
    }
};

// 나의 모든 워크스페이스 정보를 가져오는 API 입력변수는 사용자 id 리턴 된 값이 list 형태이므로 이걸로 map을 받는 컴포넌트들
// 만들기
export const getAllProjects = async (e, navigate) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}project/` + e.userid,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // 로그인이 되어 있지 않은 경우
            alert("로그인이 필요합니다");
            navigate("/Login");
        } else {
            // 다른 오류인 경우
            alert("프로젝트 리스트 조회 중 오류 발생했습니다");
        }

        throw error;
    }
};

export const getProject = async (e) => {
    console.log("UID", e);
    // alert("WID", e.workspaceId);
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}user/${e.userid}/projects/${e.workspaceId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        alert("WDATA : ", response.data);
        return response.data;
    } catch (error) {
        alert("프로젝트 상세 조회 중 오류 발생했습니다");

        throw error;
    }
};

// 워크스페이스 조인하기
export const postProject = async (data) => {
    const postData = {
        // 실제 사용 시에는 7,14, "" 가 아니라 실제 정보를 연동하면 된다
        userId: 7,
        projectId: 22,
        code: "",
        role: "TEAM_LEADER",
    };
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}enrollment`,
            postData,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        return console.log(response.data);
    } catch (error) {
        console.log(error);
        alert("팀원 직위 설정 중 오류가 발생했습니다");
    }
};

// 워크스페이스 사진 추가
export const handleUpload = async (file) => {
    try {
        if (!file) {
            console.error("파일이 없습니다.");
            alert("파일이 없습니다!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        console.log("FD", formData);

        const response = await fetch(`${process.env.REACT_APP_URL}upload`, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("email")}`,
            },
        });

        if (response.ok) {
            const result = await response.text(); // 또는 response.url 등을 사용
            console.log("파일 업로드 성공:", result);
        } else {
            console.error("파일 업로드 실패:", response.statusText);
        }
    } catch (error) {
        console.error("파일 업로드 중 에러:", error);
    }
};

export const joinProject = async (data1, data2) => {
    const joinData = {
        userId: data2,
        code: data1,
        role: "TEAM_MEMBER",
    };
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_URL}enrollment`,
            joinData,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        console.log(response.data);
    } catch (error) {
        alert("팀원 직위 추가 중 오류가 발생했습니다");
    }
};
