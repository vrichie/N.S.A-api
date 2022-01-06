import React from 'react'
import '../styles/side_nav.css'
import Entertainment_Stats from './Entertainment_Stats'

export default function Side_nav({SwitchTabs}) {




    function changeTab(e){
        // console.log(e.target.id);
        SwitchTabs(e.target.id);
    }



    return (
        <nav >
            <div id="title">
                <h1>
                    News-space
                </h1>
            </div>

            <div id="navlinks">
                <ul>
                    <h1>
                        Navigation
                    </h1>


                    <li id="home" onClick={changeTab}>
                        Home page
                    </li>


                    <li id="create_post" onClick={changeTab}>
                        create a new post
                    </li>

                    <li id="create_editor" onClick={changeTab}>
                        Add a new editor
                    </li>

                    <li id="review_post" onClick={changeTab}>
                        review post
                    </li>

                    <li id="review_editors" onClick={changeTab}>
                        review editors
                    </li>
                </ul>



                <ul>
                    <h1> Stats</h1>
                    <li id="gossip_tab" onClick={changeTab} value="gossip">
                        Gossip
                    </li>


                    <li id="entertainment_tab" onClick={changeTab}>
                        Entertainment
                    </li>

                    <li id="world_tab" onClick={changeTab}>
                        World
                    </li>


                    <li id="news_tab" onClick={changeTab}>
                        News
                    </li>
                </ul>

            </div>

            <div id="copyrights">

                <p className="ptags">
                ©️2020 News-space.| |All Rights Reserved| | TERMS & CONDITIONS.| |Privacy| | Copyrights. Acknowledgement. |Info
                </p>
                <p className="ptags">
                    By:k_ritchie
                </p>

            </div>

        </nav>
    )
}
