import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMaileProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
