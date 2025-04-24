'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

class AdScriptWithoutRouter extends React.Component {
  renderAds() {
    (adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1052551});
  }

  componentDidMount() {
    this.renderAds();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.renderAds();
    }
  }

  render() {
    return (
      
        <ins
          id="1052551" data-width="300" data-height="262"
        ></ins>
        <script dangerouslySetInnerHTML={{ __html: '(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1052551});' }}></script>
     
    );
  }
}

const AdScript = () => {
  const router = useRouter();
  return <AdScriptWithoutRouter router={router} />;
};

export default AdScript;
