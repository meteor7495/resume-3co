import { ContentCopy, ContentPaste } from "@mui/icons-material";
import ButtonUi from "components/UiKit/ButtonUi";
import InputUi from "components/UiKit/InputUi";
import { setWithdrawAddress } from "pages/Wallet/store/withdrawSlice";
import { useState } from "react";
import useStyles from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
import QRCodeUi from "components/UiKit/QRCodeUi";

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
        <Tooltip
          placement="top"
          color={"success"}
          onClose={() => setTooltip(false)}
          open={tooltip}
          classes={{ tooltip: classes.tooltip, arrow: classes.tooltipColor }}
          title={<span>Copied!</span>}
          leaveDelay={500}
          arrow
        >
          <div
            onClick={copyHandler}
            className={`flex flex-1 items-center text-[7px] lg:text-[12px] px-[7px] w-full rounded-[5px] ${classes.button}`}
          >
            {address}
          </div>
        </Tooltip>
        <ButtonUi
          onClick={copyHandler}
          className={`flex flex-1 gap-[4px] items-center leading-none `}
        >
          Copy Address <ContentCopy className="text-[12px]" />
        </ButtonUi>
      </div>
      {address ? (
        <QRCodeUi value={address} style={{ width: 80, height: 80 }} size={64} />
      ) : (
        <div className="w-[80px] h-[80px]" />
      )}
    </div>
  );
}
