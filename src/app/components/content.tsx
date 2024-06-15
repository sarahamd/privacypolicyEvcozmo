import Link from 'next/link';
import React from 'react';
import Sidecontent from '../components/sidecontent';

const Content = () => {
    return (
        <div className='container mt-3' >
            <div className="row">
                <div className="col-sm-12 col-lg-9 " style={{position:"relative"}}>
            <section>
           <h6 className='mb-3 fs-4'>General Information</h6>
           <p style={{color:"gray"}}>
           HNE Futures offers <span style={{color:"#40AFAB",fontWeight:"bold"}}>EVCozmo</span> as a free to use mobile application. This
          SERVICE is provided by HNE Futures at no cost and is intended for use as
          is. This page is used to inform visitors regarding our policies with
          the collection, use, and disclosure of Personal Information if anyone
          decided to use our Service. If you choose to use our Service, then you
          agree to the collection and use of information in relation to this
          policy. The Personal Information that we collect is used for providing
          and improving the Service. We will not use or share your information
          with anyone except as described in this Privacy Policy. The terms used
          in this Privacy Policy have the same meanings as in our Terms and
          Conditions, which are accessible at HNE Futures unless otherwise defined
          in this Privacy Policy.
           </p></section>
           <section className='mb-4'>
<h6 className='mb-3 fs-4'>
Information Collection and Use
</h6>
<p style={{color:"gray"}}>
For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information. The
          information that we request will be retained by us and used as
          described in this privacy policy. The app does use third-party
          services that may collect information used to identify you. Link to
          the privacy policy of third-party service providers used by the app  
</p>
           </section>

<p>
<Link style={{color:"#40AFAB"}}
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              
            >
              Google Play Services
            </Link>
            
</p>
<p>
<Link style={{color:"#40AFAB"}}
              href="https://firebase.google.com/policies/analytics"
              target="_blank"
            >
              Google Analytics for Firebase
            </Link>

</p>
<p>
<Link style={{color:"#40AFAB"}}
              href="https://firebase.google.com/support/privacy/"
              target="_blank"
            >
              Firebase Crashlytics
            </Link>

</p>
<section className='mb-4'>
<h6 className='mb-3 fs-4'>
Log Data</h6>
<p style={{color:"gray"}}>
We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through
          third-party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
</p>
           </section>
           <section className='mb-4'>
<h6 className='mb-3 fs-4'>
Cookies</h6>
<p style={{color:"gray"}}>
Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device&apos;s
          internal memory. This Service does not use these “cookies” explicitly.
          However, the app may use third-party code and libraries that use
          “cookies” to collect information and improve their services. You have
          the option to either accept or refuse these cookies and know when a
          cookie is being sent to your device. If you choose to refuse our
          cookies, you may not be able to use some portions of this Service.
</p>
           </section>
           <section className='mb-4'>
<h6 className='mb-3 fs-4'>
Service Providers</h6>
<p style={{color:"gray"}}>

We may employ third-party companies and individuals due to the
following reasons:</p>
<p style={{color:"gray"}}>

To facilitate our Service;
</p>
<p style={{color:"gray"}}>

To provide the Service on our behalf;
</p>
<p style={{color:"gray"}}>

To perform Service-related services; 
</p>
<p style={{color:"gray"}}>

To assist us in analyzing how our Service is used.
</p>
<p style={{color:"gray"}}>

We want to inform users of this Service that these third parties have
          access to their Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.</p>

           </section>
           <section>
           <h6 className='mb-3 fs-4'>Security</h6>
           <p style={{color:"gray"}}>
           We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
           </p></section>
           <section>
           <h6 className='mb-3 fs-4'>Links to Other Sites</h6>
           <p style={{color:"gray"}}>
           This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
           </p></section>
           <section>
           <h6 className='mb-3 fs-4'>Children’s Privacy</h6>
           <p style={{color:"gray"}}>
           These Service do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case we discover that a child under 13
          has provided us with personal information, we immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact us so that we will be able to do necessary actions.
           </p></section>
           </div>
           
            <div className="col-lg-3 " style={{position:"sticky",top:"10px"}}>
           <Sidecontent></Sidecontent>
            </div>
            </div>
           </div>
          
          
    
    );
}

export default Content;
