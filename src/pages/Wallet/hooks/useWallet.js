import useAxios from "../../../hooks/useAxios";

export default function useWallet() {
  const { get } = useAxios();
  const GetAllDeposits = async () => {
    const data = await get("wallet/deposits");
    console.log({ data });
  };

  const GetAllWallets = () => {
    get("wallet").then(({ data }) => {
      console.log({ data });
    });
  };

  return { GetAllDeposits, GetAllWallets };
}
