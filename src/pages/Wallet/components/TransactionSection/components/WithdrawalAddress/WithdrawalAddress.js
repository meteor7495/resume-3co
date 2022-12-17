import { ContentPaste } from "@mui/icons-material";
import ButtonUi from "components/UiKit/ButtonUi";
import InputUi from "components/UiKit/InputUi";
import { setWithdrawAddress } from "pages/Wallet/store/withdrawSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function WithdrawalAddress() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { address } = useSelector((s) => s.wallet.withdraw);
  const pasteHandler = async () => {
    const text = await navigator.clipboard.readText();
    dispatch(setWithdrawAddress(text));
  };

  return (
    <div className="flex gap-[10px]">
      <InputUi
        InputProps={{ classes: { input: "text-[14px]" } }}
        value={address}
        onChange={(e) => dispatch(setWithdrawAddress(e))}
      />
      <ButtonUi
        onClick={pasteHandler}
        className="flex gap-[4px] text-[12px] items-center font-bold"
      >
        Paste <ContentPaste className="text-[10px]" />
      </ButtonUi>
    </div>
  );
}
