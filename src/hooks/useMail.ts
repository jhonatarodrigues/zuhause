import MailApi from "@/repositories/mail";

interface useMailInterface {
  sendMail: (mail: string) => Promise<void>;
}

export const useMail = (): useMailInterface => {
  const sendMail = async (mail: string): Promise<void> => {
    const response = await MailApi.sendMail(mail);

    return response;
  };

  return {
    sendMail,
  };
};
