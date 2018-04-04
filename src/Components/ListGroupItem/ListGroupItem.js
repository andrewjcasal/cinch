import React from 'react';
import Logo from '../../assets/images/programs/Arsenal_FC_lg.png';

const ListGroupItem = (props) => (
  <li class="list-group-item mb-3" style={{borderRadius: 2 + "px"}}>
    <div class="row align-items-center" >
      <div class="col-auto" style={{marginRight: "30px", width: "75px", paddingLeft: "19px"}}>
        <img src={Logo} alt="Arsenal" style={{height: "70px"}} />
      </div>
      <div class="col-8" style={{paddingLeft: "14px", color: "rgba(0,0,0, .5)", fontWeight: "100"}}>
        <div class="row xlight-montserrat" style={{fontSize: "14pt"}}>
          {props.options.name}
        </div>
        <div class="row light-montserrat text-uppercase" style={{fontSize: "9pt", letterSpacing: ".9pt"}}>
          {props.options.date} @ {props.options.location}
        </div>
      </div>
    </div>
  </li>
)

export default ListGroupItem;