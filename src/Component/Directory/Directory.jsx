import React from "react";
import MenuItem from "../Menu-item/MenuItem";

import "./Directory.scss"
import { connect } from "react-redux";
import { selectDirectorySections } from "../../Redux/Directory/DirectorySelector";

function Directory ({sections}) {
    return(
                    <div className="directory-menu">
                        {
                            
                                
                                sections.map(({id, ...otherSectionProps }) =>(
                                    <MenuItem key={id} {...otherSectionProps} />
                                ))

                        
                        }
                    </div>
        )
    }

    const mapStateToProps = state => ({
      sections: selectDirectorySections(state)

    })

export default connect(mapStateToProps) (Directory);

