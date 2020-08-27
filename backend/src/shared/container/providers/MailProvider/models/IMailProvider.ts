export default interface IMaileProvider {
  sendMail(to: string, body: string): Promise<void>;
}
