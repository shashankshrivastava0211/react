import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy name",
                location: "default",
                bio: "",
                avatar_url: ""
            },
            loading: true
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shashankshrivastava0211");
        const json = await data.json();
        this.setState({ userInfo: json, loading: false });
    }

    render() {
        const { userInfo, loading } = this.state;
        
        return (
            <div className={`user-card ${loading ? "loading" : ""}`}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <h2>{userInfo.name}</h2>
                        <h4>{userInfo.bio}</h4>
                        <h3>{userInfo.location}</h3>
                        <img src={userInfo.avatar_url} alt={userInfo.name} />
                        <h4>Contact: @shashank.shrivastava1102@gmail.com</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/shashankkk02?igsh=bjVrZThlaDBmMzc=" target="_blank" rel="noopener noreferrer">
                               <div className="insta">
                                <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="Instagram" /></div>
                            </a>
                        
                            <a href="https://www.linkedin.com/in/shashankshrivastava11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/shashankshrivastava0211" target="_blank" rel="noopener noreferrer">
                                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" />
                            </a>
                            {/* Add more social links as needed */}
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default UserClass;
