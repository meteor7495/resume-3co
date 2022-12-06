import CollapseUi from "../../../../components/UiKit/CollapseUi/CollapseUi";

export default function FAQCard({ title, visibility, btc, usd, ...props }) {
  return (
    <div className={`flex flex-col gap-[12px]`}>
      <div className={`font-bold text-[15px]`}>FAQ</div>
      <div className={`flex flex-col gap-[10px]`}>
        <DepositCollapse name="Do I send money?">
          No, not at all. Your friend will never and ever give back your money
          now that’s your choise to trust your friend or not. your money now
          that’s your choise to trust your friend or not.
        </DepositCollapse>
        <DepositCollapse name="Do I have to do my friend?">
          your money now that’s your choise to trust your friend or not. your
          money now that’s your choise to trust your friend or not. No, not at
          all. Your friend will never and ever give back your money now that’s
          your choise to trust your friend or not.
        </DepositCollapse>
        <DepositCollapse name="Do I have to send money to my useless friend?">
          No, not at all. Your friend will never and ever give back your money
          now that’s your choise to trust your friend or not.
        </DepositCollapse>
      </div>
    </div>
  );
}

const DepositCollapse = (props) => {
  return (
    <CollapseUi
      {...props}
      className={`border-0 w-full max-w-[400px]`}
      classes={{
        button: `border-b-0 text-[13px] font-bold p-0 px-0 gap-[4px] h-fit rounded-[2px]`,
        collapse: `text-[12px] pt-[5px]`,
      }}
    />
  );
};
