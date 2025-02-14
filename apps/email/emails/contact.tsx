import { ContactTemplate } from '@repo/email/templates/contact';

const ExampleContactEmail = () => (
  <ContactTemplate
    name="Mathew Lewallen"
    email="mathewlewallen@cloudcontext.cc"
    message="I'm interested in your services."
  />
);

export default ExampleContactEmail;
