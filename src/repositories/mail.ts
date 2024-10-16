import axios from "axios";

const MailApi = {
  sendMail: async (email: string) => {
    const api = axios.create({
      baseURL: "https://zuhausemoveisecolchoes.com.br/mailer.php",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });

    const { data } = await api.post("", { email });

    return data;
  },
};

export default MailApi;
