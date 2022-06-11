import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Link, Row } from '..';
import styles from './Form.module.css';
import { IFormData, IFormProps } from './Form.props';

function Form({ className }: IFormProps): JSX.Element {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    mode: 'onChange',
  });
  const onSubmit = handleSubmit(async (value: IFormData) => {
    const { name, email, subject, message } = value;

    const text = `<b>Name:</b> <i>${name}</i>%0A<b>Email:</b> <i>${email}</i>%0A<b>Subject:</b> <i>${subject}</i>%0A<b>Message:</b> <i>${message}</i>`;
    const token = '5586832849:AAEmw63WL0xi3L25eICzJApUyLCYZh-3K8o';
    const chatId = '-678764157';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`;

    await fetch(url);
    reset();
  });
  return (
    <Row>
      <form className={cn(styles.contactForm, className)} onSubmit={onSubmit}>
        <Row>
          <div className={cn(styles.formItem, styles.colSix)}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Name"
                {...register('name', {
                  required: { value: true, message: 'Enter your name' },
                })}
              />
              {errors.name && <span className={styles.formError}>{errors.name.message}</span>}
            </div>
          </div>
          <div className={cn(styles.formItem, styles.colSix)}>
            <div className={styles.formGroup}>
              <input
                type="email"
                className={styles.formControl}
                placeholder="Email"
                {...register('email', {
                  required: { value: true, message: 'Enter your email' },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <span className={styles.formError}>{errors.email.message}</span>}
            </div>
          </div>
        </Row>
        <Row>
          <div className={cn(styles.formItem, styles.colTwelve)}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Subject"
                {...register('subject', {
                  required: { value: true, message: 'Fill in this field' },
                })}
              />
              {errors.subject && <span className={styles.formError}>{errors.subject.message}</span>}
            </div>
          </div>
        </Row>
        <Row>
          <div className={cn(styles.formItem, styles.colTwelve)}>
            <div className={styles.formGroup}>
              <textarea
                className={styles.formControl}
                placeholder="Message"
                {...register('message', {
                  required: { value: true, message: 'Enter the text of the message' },
                })}
              />
              {errors.message && <span className={styles.formError}>{errors.message.message}</span>}
            </div>
          </div>
        </Row>
        <Row>
          <div className={cn(styles.formItem, styles.colTwelve)}>
            <Link href="#" type="submit" btn>
              Send Message
            </Link>
          </div>
        </Row>
      </form>
    </Row>
  );
}

export default Form;
