import React from "react";
import useStyles from "./Item.styles";
import {useSelector} from "react-redux";
import ButtonUi from "../../../../../components/UiKit/ButtonUi";
import PersonIcon from '@mui/icons-material/Person';
export default function Item({children,...props}) {
  const classes = useStyles();
  const {theme} = useSelector((s) => s.app);
  let className = `w-full justify-start h-[52px] px-6 ${classes.item}`
  const classHandler = () => {
    if(props?.active){
      className += ` ${classes.active}`
    }else if(props?.disabled){
      className += ` ${classes.disabled}`
    }
    return className
  }
  return (
    <ButtonUi
      startIcon={<PersonIcon />}
      className={classHandler()}
      {...props}>
      {children}
    </ButtonUi>
  );
}
