import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_POST_DATA = gql`
query QueryHomepage($homepageSlug: String) {
  home(where: {slug: $homepageSlug}) {
    id
    slug
    publishedAt
    heroTagline {
      html
    }
    mainContent {
      ... on PageSection {
        id
        row {
          ... on ShowcaseElement {
            id
            showcaseMedia {
              url(transformation: {image: {}})
            }
          }
          ... on PageSection {
            id
            sectionTitle
          }
          ... on StatsElement {
            id
            stat
            statName
          }
        }
        sectionTitle
      }
    }
    techPulseFeaturedProducts {
      id
      name
      regular_price
      price
      description
      featured
      permalink
      short_description
      images {
        name
        src
      }
    }
    newsDataposts
  }
}
`;

const Landing = () => {
    const { homepageSlug = 'home' } = useParams(); // Get postSlug from URL
    const { loading, error, data } = useQuery(GET_POST_DATA, {
        variables: { homepageSlug }, // Use the homepageSlug variable
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const heroTagline = data.home?.heroTagline?.html; // Get the post title for the generic page
    const sectionTitle = data.home?.mainContent.find(section => section.id === "cmeam2wqn1h5f07ppcu1ziooj")?.sectionTitle;
    const mainContent = data.home?.mainContent ?? [];
    const allRows = mainContent.flatMap(section => section.row ?? []);
    const allShowcaseMedia = allRows.flatMap(row => row.showcaseMedia ?? []);
    // const featuredProducts = data.techpulseWooProducts.filter(product => product.featured);
    const newsDataposts =data.home?.newsDataposts?.results.slice(0, 4) ?? [];
    const featuredProducts = data.home?.techPulseFeaturedProducts ?? [];
    //const featuredProductImageUrls = featuredProducts.map(product => product.images) ?? [];
    // console.log('Featured Products:', featuredProducts);
    // console.log('Image URLs:', featuredProductImageUrls);
    // console.log('news network:', newsDataposts);
    return (
        <>
            <section className="header18 cid-uTAqkzFez1 mbr-fullscreen" data-bg-video="https://www.youtube.com/embed/sQ22pm-xvrE?autoplay=1&amp;loop=1&amp;playlist=sQ22pm-xvrE&amp;t=20&amp;mute=1&amp;playsinline=1&amp;controls=0&amp;showinfo=0&amp;autohide=1&amp;allowfullscreen=true&amp;mode=transparent" id="hero-16-uTAqkzFez1" style={{ alignItems: 'flex-end' }}>
                <div className="mbr-background-video-preview" style={{ display: 'block', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: 'url("https://img.youtube.com/vi/sQ22pm-xvrE/sddefault.jpg")' }}></div>
                <div style={{ overflow: 'hidden', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px' }}>
                    <div style={{ background: 'rgb(0, 0, 0)', inset: '0px' }}>
                        <div className="mbr-video-foreground" style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', pointerEvents: 'none' }}></div>
                    </div>
                </div>
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-wrap col-12 col-md-10">
                            <div dangerouslySetInnerHTML={{ __html: heroTagline }} className="pulse-tagline animate__animated animate__delay-1s animate__fadeIn"></div>
                            <div className="mbr-section-btn">
                                <a className="btn btn-white-outline display-7 animate__animated animate__delay-1s animate__fadeIn" href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery07 cid-uTAqkzFHB0" id="gallery-16-uTAqkzFHB0">
                <div className="container-fluid gallery-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                    <strong>{sectionTitle}</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="grid-container-3" >
                            {allShowcaseMedia.map(media => (
                                <div className="grid-item">
                                    <img src={media.url} className="animate__animated animate__delay-1s" />
                                </div>
                            ))}   
                        </div>
                    </div>
                </div>
            </section>
            <section className="people06 cid-uTAqkzFtf9" id="testimonials-7-uTAqkzFtf9" style={ {backgroundColor:'#fefae6' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-12 col-md-12 col-lg-8">
                            <div className="card-wrapper">
                                <div className="card-box align-center">
                                    <p className="card-text mbr-fonts-style display-5 animate__animated animate__delay-1s animate__fadeIn">
                                        Incredible insights into the latest tech trends!
                                    </p>
                                    <div className="img-wrapper mt-3 justify-content-center">
                                        <img src="/src/assets/savedsources/saved_resource(5).jpeg" data-slide-to="0" data-bs-slide-to="0" className="animate__animated animate__delay-1s animate__fadeIn" />
                                    </div>
                                    <p className="card-title mbr-fonts-style mt-3 display-7 animate__animated animate__delay-1s animate__fadeIn">
                                        <strong>Alex Rivera</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="header18 cid-uTAqkzF5nh mbr-fullscreen" data-bg-video="https://www.youtube.com/embed/AWz5guBHcI8?autoplay=1&amp;loop=1&amp;playlist=AWz5guBHcI8&amp;t=20&amp;mute=1&amp;playsinline=1&amp;controls=0&amp;showinfo=0&amp;autohide=1&amp;allowfullscreen=true&amp;mode=transparent" id="video-5-uTAqkzF5nh">
                <div className="mbr-background-video-preview" style={{ display: 'block', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: 'url("https://img.youtube.com/vi/AWz5guBHcI8/maxresdefault.jpg")' }}></div>
                {/* <div style={{ overflow: 'hidden', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px' }}>
                    <div style={{ background: 'rgb(0, 0, 0)', inset: '0px' }}>
                        <div className="mbr-video-foreground" style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', pointerEvents: 'none' }}>
                            <iframe className="mbr-background-video" id="ytplayer-d21eb6" style={{ marginTop: '0px', maxWidth: 'initial', transitionProperty: 'opacity', transitionDuration: '1000ms', pointerEvents: 'none', position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', transform: 'scale(1.2)' }} frameBorder="0" allowFullScreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" title="Video Background Blue light Full HD" width="1536" height="864" src="./Latest Tech News and Products - Company Blog_files/AWz5guBHcI8.html"></iframe>
                        </div>
                    </div>
                    <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                    <div className="container-fluid">
                        <div className="row"></div>
                    </div>
                </div> */}
            </section>
            <section className="features10 cid-uTAqkzFCdx" id="metrics-2-uTAqkzFCdx">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-title mbr-fonts-style display-1 mb-3">
                                        <strong>150+</strong>
                                    </p>
                                    <p className="card-text mbr-fonts-style mb-3 display-7">
                                        Global Reach
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-title mbr-fonts-style display-1 mb-3">
                                        <strong>2.5M+</strong>
                                    </p>
                                    <p className="card-text mbr-fonts-style mb-3 display-7">
                                        Active Users
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-title mbr-fonts-style display-1 mb-3">
                                        <strong>50+</strong>
                                    </p>
                                    <p className="card-text mbr-fonts-style mb-3 display-7">
                                        New Innovations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features03 cid-uTAqkzFWbz" id="news-1-uTAqkzFWbz">
                <div className="container-fluid">
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                    <strong>Latest Tech Buzz</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {newsDataposts.map((newsdata) => (
                        <div className="item features-image col-12 col-md-6 col-lg-3 active animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src={newsdata.image_url} />
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                                        <strong><a className="text-black fw-bold" href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#">{newsdata.title}</a></strong>
                                    </h6>
                                    <p className="mbr-text mbr-fonts-style mb-3 display-7">{newsdata.pubDate}</p>
                                    <p className="mbr-text mbr-fonts-style mb-3 display-7 mini-excerpt">{newsdata.description}</p>
                                    <div className="mbr-section-btn item-footer"><a href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#" className="btn item-btn btn-primary display-7">More</a></div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing02 cid-uTAqkzF4zW" id="product-list-9-uTAqkzF4zW" style={ {backgroundColor:'#fefae6' }}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                    <strong>Our Innovations</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {featuredProducts.map((featuredProduct) => (
                            <div className="item features-image col-12 col-md-6 col-lg-4 animate__animated animate__delay-1s animate__fadeIn"
                                key={featuredProduct.id}>
                                <div className="item-wrapper">
                                    <div className="item-img">
                                        {/* Use product.image if available, fallback to a placeholder */}
                                            <img src={featuredProduct.images[0]?.src} alt={featuredProduct.name ?? ""} />
                                    </div>
                                    <div className="item-content">
                                        <h5 className="item-title mbr-fonts-style display-5"><strong>{featuredProduct.name}</strong>
                                        </h5>
                                        <h6 className="item-subtitle mbr-fonts-style display-7"> ${featuredProduct.price}</h6>
                                        <p className="mbr-text mbr-fonts-style display-7"
                                        dangerouslySetInnerHTML={{ __html: featuredProduct.short_description }}
                                        />
                                        <div className="mbr-section-btn item-footer">
                                            <a href={featuredProduct.permalink} className="btn item-btn btn-primary display-7" target="_blank" rel="noopener noreferrer">
                                                Acquire
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="features03 cid-uTAqkzF3LR" id="partners-1-uTAqkzF3LR">
                <div className="container-fluid">
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                    <strong>Trusted Collaborators</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item features-image col-12 col-md-6 col-sm-6 col-lg-2 active animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="/src/assets/savedsources/saved_resource(16).jpeg" data-slide-to="1" data-bs-slide-to="1"/>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-sm-6 col-lg-2 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="/src/assets/savedsources/saved_resource(17).jpeg" data-slide-to="2" data-bs-slide-to="2"/>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-sm-6 col-lg-2 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="/src/assets/savedsources/saved_resource(18).jpeg" data-slide-to="3" data-bs-slide-to="3"/>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-sm-6 col-lg-2 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="/src/assets/savedsources/saved_resource(19).jpeg" data-slide-to="4" data-bs-slide-to="4"/>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-sm-6 col-lg-2 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="/src/assets/savedsources/saved_resource(20).jpeg" data-slide-to="5" data-bs-slide-to="5"/>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-sm-6 col-lg-2 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src="/src/assets/savedsources/saved_resource(21).jpeg" data-slide-to="6" data-bs-slide-to="6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="article12 cid-uTAqkzF1Ui" id="about-us-12-uTAqkzF1Ui">    
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <h3 className="mbr-section-title mbr-fonts-style mb-4 mt-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                            <strong>Innovating Tomorrow, Today</strong>
                            </h3>
                            <p className="mbr-text mbr-fonts-style display-7 animate__animated animate__delay-1s animate__fadeIn">At Quantum Innovations, we are driven by a passion for technological advancement. Our mission is to create cutting-edge solutions that solve real-world problems and shape a better future.</p>
                            <p className="mbr-text mbr-fonts-style display-7 animate__animated animate__delay-1s animate__fadeIn">Our team comprises brilliant minds from diverse backgrounds, united by a shared vision of progress. We foster a collaborative environment where creativity and innovation flourish.</p>
                            <p className="mbr-text mbr-fonts-style display-7 animate__animated animate__delay-1s animate__fadeIn">We believe in the power of technology to transform lives. From artificial intelligence to sustainable energy, we are committed to pushing the boundaries of what's possible.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="people03 cid-uTAqkzFz4g" id="team-1-uTAqkzFz4g">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                    <strong>Our Innovators</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item features-image col-12 col-md-6 col-lg-3 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src="/src/assets/savedsources/saved_resource(22).jpeg"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle mbr-fonts-style display-5">
                                        <strong>Alex</strong></h6>
                                    <p className="mbr-text mbr-fonts-style display-7">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src="/src/assets/savedsources/saved_resource(23).jpeg"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle mbr-fonts-style display-5">
                                        <strong>Sophia</strong></h6>
                                    <p className="mbr-text mbr-fonts-style display-7">Content Strategist</p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src="/src/assets/savedsources/saved_resource(24).jpeg"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle mbr-fonts-style display-5">
                                        <strong>Ethan</strong></h6>
                                    <p className="mbr-text mbr-fonts-style display-7">Product Manager</p>
                                </div>
                            </div>
                        </div>
                <div className="item features-image col-12 col-md-6 col-lg-3 animate__animated animate__delay-1s animate__fadeIn">
                    <div className="item-wrapper">
                    <div className="item-img mb-3">
                        <img src="/src/assets/savedsources/saved_resource(25).jpeg"/>
                    </div>
                    <div className="item-content align-left">
                        <h6 className="item-subtitle mbr-fonts-style display-5">
                        <strong>Olivia</strong>
                        </h6>
                        <p className="mbr-text mbr-fonts-style display-7">Marketing Lead</p>
                    </div>
                    </div>
                </div>
                    </div>
                </div>
            </section>
            <section className="gallery10 cid-uTAqkzGG7D" id="features-69-uTAqkzGG7D">
                <div className="container-fluid">
                    <div className="loop-container" style={{ position: 'relative', display: 'inline-flex', whiteSpace: 'nowrap', transform: 'translateX(-51.425%)' }}>
                        <div className="item display-1 animate__animated animate__delay-1s animate__fadeIn" data-linewords="
                        Groundbreaking Gadgets *
                        Insightful Tech News *" data-direction="-1" data-speed="0.05">
                        Groundbreaking Gadgets *
                        Insightful Tech News *&nbsp;</div>
                        <div className="item display-1 animate__animated animate__delay-1s animate__fadeIn" data-linewords="
                        Groundbreaking Gadgets *
                        Insightful Tech News *" data-direction="-1" data-speed="0.05" style={{ position: 'absolute', left: '100%'}}>
                        Groundbreaking Gadgets *
                        Insightful Tech News *&nbsp;
                        </div>
                    </div>   
                </div>
            </section>
            <section className="image02 cid-uTAqkzGgZx mbr-fullscreen mbr-parallax-background" id="image-13-uTAqkzGgZx" style={{ position: 'relative', zIndex: 0, backgroundImage: 'none' }}>
                <div className="container">
                    <div className="row"></div>
                </div>
                <div id="jarallax-container-0" style={{ position: 'absolute',top: '0px',left: '0px',width: '100%',height: '100%',overflow: 'hidden',
        zIndex: -100 }}>
                    <div style={{ backgroundPosition: '50% 50%',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: 'url("https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1496065187959-7f07b8353c55%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHwwfHx8MTc1NDkwMDk2NXww%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D80&amp;e=1759968000&amp;s=0j99WagqEzhpQnGE2q2yBKyiH2dPkwHIS5SlXijm_z4")',position: 'absolute',top: '0px',left: '0px',width: '1520.8px',height: '729.76px',overflow: 'hidden',pointerEvents: 'none',transformStyle: 'preserve-3d',backfaceVisibility: 'hidden',willChange: 'transform, opacity',marginTop: '0.119989px',transform: 'translate3d(0px, -261.87px, 0px)'}}></div>
                </div>
            </section>
            <section className="header09 startm5 cid-uTAqkzG57Q" id="call-to-action-2-uTAqkzG57Q">
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-wrap col-12 col-md-6">
                            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                <strong>Stay Ahead of the Curve</strong>
                            </h1>
                            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7 animate__animated animate__delay-1s animate__fadeIn">
                                Get the latest tech updates and exclusive product offers delivered straight to your inbox. Sign up now!
                            </p>
                            <div className="mbr-section-btn">
                                <a className="btn btn-primary display-7 animate__animated animate__delay-1s animate__fadeIn" href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="list05 cid-uTAqkzGVOW" id="faq-3-uTAqkzGVOW" style={ {backgroundColor:'#fefae6' }}>
                <div className="container">
                    <div className="col-12 mb-5 content-head">
                        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                            <strong>Your Questions Answered</strong>
                        </h3>   
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="item features-without-image col-12 active animate__animated animate__delay-1s animate__fadeIn">
                                <div className="item-wrapper">
                                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                                        <strong>What makes your products special?</strong></h5>
                                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                                        Our products are designed with cutting-edge technology to provide you with the best performance and user experience. We focus on innovation and quality.
                                    </p>
                                </div>
                            </div>
                            <div className="item features-without-image col-12 animate__animated animate__delay-1s animate__fadeIn">
                                <div className="item-wrapper">
                                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                                        <strong>What is your return policy?</strong></h5>
                                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                                        We offer a 30-day money-back guarantee on all our products. If you're not satisfied, simply return it for a full refund.
                                    </p>
                                </div>
                            </div>
                            <div className="item features-without-image col-12 animate__animated animate__delay-1s animate__fadeIn">
                                <div className="item-wrapper">
                                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                                        <strong>Do you ship internationally?</strong></h5>
                                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                                        Yes, we provide worldwide shipping. Delivery times may vary depending on your location.
                                    </p>
                                </div>
                            </div>
                            <div className="item features-without-image col-12 animate__animated animate__delay-1s animate__fadeIn">
                                <div className="item-wrapper">
                                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                                        <strong>How can I get support?</strong></h5>
                                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                                        You can contact our support team via email at support@techinnovate.com or through the contact form on our website. We typically respond within 24 hours.
                                    </p>
                                </div>
                            </div>
                            <div className="item features-without-image col-12 animate__animated animate__delay-1s animate__fadeIn">
                                <div className="item-wrapper">
                                    <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                                        <strong>What payment methods do you accept?</strong></h5>
                                    <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                                        We accept all major credit cards, PayPal, and bank transfers. Your payment information is secure and encrypted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="social05 cid-uTAqkzGd6n" id="follow-us-2-uTAqkzGd6n">
                <div className="container">
                    <div className="row">
                        <h3 className="mbr-section-title align-center mb-5 mbr-fonts-style display-2 animate__animated animate__delay-1s animate__fadeIn">
                            <strong>Connect With Us</strong>
                        </h3>
                        <div className="col-12">
                            <div className="social-row">
                                <div className="soc-item">
                                    <a href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn">
                                        <span className="mbr-iconfont socicon socicon-facebook"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn">
                                        <span className="mbr-iconfont socicon-twitter socicon"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn">
                                        <span className="mbr-iconfont socicon-instagram socicon"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn">
                                        <span className="mbr-iconfont socicon socicon-linkedin"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn">
                                        <span className="mbr-iconfont socicon socicon-twitch"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contacts01 cid-uTAqkzGCDG" id="contacts-1-uTAqkzGCDG" style={ {backgroundColor:'#fefae6' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                    <strong>Contact Us</strong>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item features-without-image col-12 col-md-6 active animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="text-wrapper">
                                    <h6 className="card-title mbr-fonts-style mb-3 display-5">
                                        <strong>Phone</strong>
                                    </h6>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        <a href="tel:+1 (555) 123-4567" className="text-black">+1 (555) 123-4567</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="text-wrapper">
                                    <h6 className="card-title mbr-fonts-style mb-3 display-5">
                                        <strong>Email</strong>
                                    </h6>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        <a href="mailto:info@techinnovate.com" className="text-black">info@techinnovate.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="text-wrapper">
                                    <h6 className="card-title mbr-fonts-style mb-3 display-5">
                                        <strong>Location</strong>
                                    </h6>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        123 Innovation Drive, Tech City, CA 94000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="text-wrapper">
                                    <h6 className="card-title mbr-fonts-style mb-3 display-5">
                                        <strong>Hours</strong>
                                    </h6>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Mon-Fri: 9 AM - 6 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Landing;  
    