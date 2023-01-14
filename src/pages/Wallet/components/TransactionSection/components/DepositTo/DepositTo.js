import { ContentCopy } from "@mui/icons-material";
import ButtonUi from "components/UiKit/ButtonUi";
import { useState } from "react";
import useStyles from "../../styles";
import { useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
import QRCodeUi from "components/UiKit/QRCodeUi";
import CopyButton from "components/CopyButton/CopyButton";

export default function DepositTo() {
  const classes = useStyles();
  const [tooltip, setTooltip] = useState(false);
  const { address: { address } = {} } = useSelector((s) => s.wallet.coin);

  const copyHandler = () => {
    setTooltip(true);
    document.execCommand(address);
    navigator.clipboard.writeText(address);
  };
  return (
    <div className="flex gap-[10px]">
      <div className="flex grow flex-col gap-[5px] grow">
        <CopyButton
          className={`flex flex-1 items-center text-[7px] lg:text-[12px] px-[7px] w-full rounded-[5px] ${classes.button}`}
          setOpen={setTooltip}
          open={tooltip}
          value={address}
        >
          {address}
        </CopyButton>
        <ButtonUi
          onClick={copyHandler}
          className={`flex flex-1 gap-[4px] items-center leading-none `}
        >
          Copy Address <ContentCopy className="text-[12px]" />
        </ButtonUi>
      </div>
      {address ? (
        <Tooltip
          placement="top"
          arrow
          disableFocusListener
          color="#fff"
          title={
            <QRCodeUi
              value={address}
              style={{ width: 165, height: 165 }}
              size={150}
            />
          }
        >
          <div>
            <QRCodeUi
              value={address}
              style={{ width: 80, height: 80 }}
              size={64}
            />
          </div>
        </Tooltip>
      ) : (
        <div className="w-[80px] h-[80px]" />
      )}
    </div>
  );
}
