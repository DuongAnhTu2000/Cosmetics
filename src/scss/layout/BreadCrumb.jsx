import "./BreadCrumb.scss";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

 
function Breadcrumb(title) {
  return (
    <div className="breadcrumb--container">
      <div className="breadcrumb--container__wrap">
        <h3>{title.title}</h3>
        <Breadcrumbs
          separator="\"
          className="breadcrumb"
        >
          <Link underline="hover" href="/" color="inherit">
            Home
          </Link>
          <Typography className="breadcrumb">{title.title}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Breadcrumb;
