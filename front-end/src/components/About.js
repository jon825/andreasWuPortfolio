import React, { Component } from "react";

import "../css/App.css";

class About extends Component {
  render() {
    return (
      <div className="about-page">
      <div className="row">
        <div className="col about-info">
          <p>
            Lorem ipsum dolor sit amet, suscipit lorem, amet et, lacinia vero, magnis vestibulum rhoncus imperdiet. Pellentesque et mauris ante, ultrices lobortis, tincidunt mi in elit nec, quisque congue elementum arcu, pellentesque vestibulum etiam ac gravida suspendisse. Integer risus, vitae sagittis dignissim, sed cubilia, nunc eget augue. Non in arcu mi pellentesque, volutpat in vestibulum ultricies nisl nunc. Orci lorem enim a duis accumsan quam, vel tristique ac nullam nam lacus quis, integer ac dolor laoreet odio mi, curabitur pretium diam pellentesque lacinia vel aliquam, sollicitudin vestibulum lorem rhoncus tempor. Mauris in, integer ridiculus recusandae ipsum praesent ac iaculis, massa suscipit nec proin. Amet eu nunc sem, eleifend adipiscing, in porta, odio senectus phasellus semper ipsum.
            </p>
            <p>

            Congue duis, ut ante sed, nullam sollicitudin in, dolor rhoncus, volutpat nisl sodales neque rhoncus pharetra. Lectus cras mattis suspendisse, luctus sem, sapien posuere aliquam laoreet, pellentesque nulla. Curabitur ante quis sollicitudin nunc erat mauris, viverra vel eget. Quia urna, convallis est proin sed torquent, libero urna hendrerit maecenas, id odio etiam amet. Euismod posuere aliquam vivamus, eget a, erat malesuada justo tellus vestibulum justo, per convallis nisl amet facilisis, odio mauris vulputate. Pellentesque et, lectus sapien ultrices ac dolor justo lectus.
          </p>
        </div>
        <div className="col about-img">
          <img src={require("../images/andreas.jpg")} />
        </div>
      </div>
      </div>
    );
  }
}

export default About;
