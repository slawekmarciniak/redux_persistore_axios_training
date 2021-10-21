type Body = {
  subject: string;
  emailText: string;
};

export const sendEmail = (body: Body): void => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  type Options = {
    method: string;
    headers: Headers;
    mode: any;
    body: string;
  };

  const options: Options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
  };

  fetch("https://enlb3pvyelah.x.pipedream.net", options);
};
