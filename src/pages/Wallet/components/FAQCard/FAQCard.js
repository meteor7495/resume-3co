import CollapseUi from "../../../../components/UiKit/CollapseUi/CollapseUi";

export default function FAQCard({
  title,
  visibility,
  btc,
  usd,
  className,
  items = [],
  ...props
}) {
  return (
    <div className={`flex flex-col gap-[12px] ${className}`}>
      <div className={`font-bold text-[15px]`}>FAQ</div>
      <div className={`flex flex-col gap-[10px]`}>
        {items.map(({ question, answer }) => (
          <DepositCollapse name={question}>{answer}</DepositCollapse>
        ))}
      </div>
    </div>
  );
}

const DepositCollapse = (props) => {
  return (
    <CollapseUi
      {...props}
      className={`border-0 w-full`}
      classes={{
        button: `border-b-0 text-[13px] text-left font-bold p-0 px-0 gap-[4px] h-fit rounded-[2px]`,
        collapse: `text-[12px] pt-[5px]`,
      }}
    />
  );
};
