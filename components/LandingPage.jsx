'use client';

import Nav from './Nav';
import Hero from './Hero';
import Proof from './Proof';
import WaitlistForm from './WaitlistForm';
import Footer from './Footer';
import sharedFooter from '@/content/shared/footer';

export default function LandingPage({ variant }) {
  return (
    <>
      <Nav />
      <Hero hero={variant.hero} />
      <Proof proof={variant.proof} />
      <WaitlistForm form={variant.form} />
      <Footer footer={sharedFooter} />
    </>
  );
}
