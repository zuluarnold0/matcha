import React from 'react';

class AppSideBar extends React.Component {
    render() { 
        const { handleChange, sexpref_, user } = this.props;
        return (
            <div className="sidebar">
                <center>
                    <img src={ user.photourl } className="profile_image" alt="img" />
                    <h4>{ user.firstname }</h4>
                </center>
                <div className="sidebar-filter">
                    <div className="sidebar_section">
                        <span className="sidebar-title">Filter by tags: </span>
                        <div className="sidebar-tags">
                            <span className="tagz_">photography</span>
                            <span className="tagz_">art</span>
                            <span className="tagz_">music</span>
                            <span className="tagz_">coding</span>
                            <span className="tagz_">gym</span>
                        </div>
                        <input
                            className="form-control"
                            type="text"
                            name="tag_"
                            placeholder="Enter one tag from above..."
                            onChange={handleChange}
                        />
                    </div>

                    <div className="sidebar_section">
                        <span className="sidebar-title">Filter by location: </span>
                        <input
                            className="form-control"
                            type="text"
                            name="city_"
                            placeholder="Search by city or town..."
                            onChange={handleChange}
                        />
                    </div>
                        
                    <div className="">
                        <input
                            type="hidden"
                            name="sexpref_"
                            value={sexpref_}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default AppSideBar;