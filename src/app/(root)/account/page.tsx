import { GeneralSection } from './_components/section';

const General = () => {
  return (
    <div className='flex flex-col items-center justify-start gap-5'>
      <GeneralSection
        title='Display Name'
        type='display-name'
        description='Please enter your full name, or a display name you are comfortable
            with.'
        footerText='Please use 32 characters at maximum.'
      />
      <GeneralSection
        title='Username'
        type='username'
        description='Please enter your username'
        footerText='Please use 15 characters at maximum.'
      />
      <GeneralSection
        title='Email'
        type='email'
        description='Please enter the email address you want to use to log in with Telehunt.'
        footerText='We will email you to verify the change.'
      />
    </div>
  );
};

export default General;
