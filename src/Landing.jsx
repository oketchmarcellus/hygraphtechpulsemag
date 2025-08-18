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
        ... on Partner {
            id
            partnerSectionTitle
            sectionForPartnerLogo {
             id
             logoImage {
                url
             }
            }
        }
        ... on Team {
            id
            teamSectionTitle
            teamMember {
             id
             jobTitle
             memberName
             memberImage {
                url
              }
            }
        }
        ... on BreakingNewSection {
            id
            breakingNewsData {
            id
            newsItem
            }
        }
        ... on Faq {
            id
            faqSectionTitle
            faqSectionContent {
                faqContent {
                    html
                }
            }
        }
      ... on ContactSection {
        id
        sectionTitle
        contacts {
          id
          contactDetailsItem {
            html
          }
        }
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
    const statsSection = data.home?.mainContent.find(section => section.id === "cmean5utk1hj607ppc8jeeqhm") ?? [];
    const PartnerSection = data.home?.mainContent.find(section => section.id === "cmedul8290dib07pnrap4yhdj") ?? [];
    const TeamSection = data.home?.mainContent.find(section => section.id === "cmedu0hmo0cls08ps1cw7r4j8") ?? [];
    const groundbreakingNews= data.home?.mainContent.find(section => section.id === "cmeglxofq1w6u07pn3w1474qm")?.breakingNewsData ?? [];
    const faqsSection=data.home?.mainContent.find(section => section.id === "cmegngobr1xej07pnprm0dkl2") ?? [];
    const ContactSection= data.home?.mainContent.find(section => section.id === "cmegnjc3u1xa808ps0bidukjk") ?? [];
    const mainContent = data.home?.mainContent ?? [];
    const allRows = mainContent.flatMap(section => section.row ?? []);
    const allShowcaseMedia = allRows.flatMap(row => row.showcaseMedia ?? []);
    const allStats = statsSection.row ?? [];
    const allPartnerLogos = PartnerSection.sectionForPartnerLogo ?? [];
    const PartnerLogoImages= allPartnerLogos.map(partner => partner.logoImage) ?? [];
    const allteamMembers = TeamSection.teamMember ?? [];
    const groundbreakingNewsItems = groundbreakingNews.map(news => news.newsItem) ?? [];
    const faqsContent = faqsSection.faqSectionContent ?? [];
    const contactSectionContent = ContactSection.contacts ?? [];
    // const featuredProducts = data.techpulseWooProducts.filter(product => product.featured);
    const newsDataposts =data.home?.newsDataposts?.results.slice(0, 4) ?? [];
    const featuredProducts = data.home?.techPulseFeaturedProducts ?? [];
    //const featuredProductImageUrls = featuredProducts.map(product => product.images) ?? [];
    // console.log('Featured Products:', featuredProducts);
    // console.log('Image URLs:', featuredProductImageUrls);
    // console.log('news network:', newsDataposts);
    console.log('All Showcase:', allShowcaseMedia);
    console.log('Stats Section:', statsSection);
    console.log('All Stats:', allStats);
    console.log('Partners Logos:', allPartnerLogos);
    console.log('Breaking News Items:', groundbreakingNewsItems);
    console.log('FAQs Content:', faqsContent);
    console.log('Contact Section Content:', contactSectionContent);
    // console.log('team Members Images:', teamMemberImages);
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
                                <div className="grid-item" key={media.id}>
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
                        {allStats.map(stat => (
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-title mbr-fonts-style display-1 mb-3">
                                        <strong>{stat.stat}</strong>
                                    </p>
                                    <p className="card-text mbr-fonts-style mb-3 display-7">{stat.statName}</p>
                                </div>
                            </div>
                        </div>
                        ))}
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
                                    <strong>{PartnerSection.partnerSectionTitle}</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {PartnerLogoImages.map(image => (
                        <div className="item features-image col-12 col-md-6 col-sm-6 col-lg-2 active animate__animated animate__delay-1s animate__fadeIn" key={image.id}>
                            <div className="item-wrapper">
                                <div className="item-img">
                                    <img src={image.url} data-slide-to="1" data-bs-slide-to="1"/>
                                </div>
                            </div>
                        </div>
                        ))}
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
                                    <strong>{TeamSection.teamSectionTitle}</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {allteamMembers.map(member => (
                        <div className="item features-image col-12 col-md-6 col-lg-3 animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src={member.memberImage?.url} alt="Team Member"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle mbr-fonts-style display-5">
                                        <strong>{member.memberName}</strong></h6>
                                    <p className="mbr-text mbr-fonts-style display-7">{member.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="gallery10 cid-uTAqkzGG7D" id="features-69-uTAqkzGG7D">
                <div className="container-fluid">
                    <div className="loop-container" style={{ position: 'relative', display: 'inline-flex', whiteSpace: 'nowrap', transform: 'translateX(-51.425%)' }}>
                        {groundbreakingNewsItems.map((newsitem, index) => (
                        <div className="item display-1 animate__animated animate__delay-1s animate__fadeIn" data-linewords={newsitem} data-direction="-1" data-speed="0.05" key={index}>{newsitem}
                        </div>
                        ))}
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
                            <strong>{faqsSection.faqSectionTitle}</strong>
                        </h3>   
                    </div>
                    <div className="row justify-content-center">
                        {faqsContent.map(faqItem => (
                        <div className="col-12 col-lg-8">
                            <div className="item features-without-image col-12 active animate__animated animate__delay-1s animate__fadeIn">
                                <div className="item-wrapper">
                                    <div className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5"
                                        dangerouslySetInnerHTML={{ __html: faqItem.faqContent.html }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
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
                                    <strong>{ContactSection.sectionTitle}</strong>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {contactSectionContent.map(contact => (
                        <div className="item features-without-image col-12 col-md-6 active animate__animated animate__delay-1s animate__fadeIn">
                            <div className="item-wrapper">
                                <div className="text-wrapper">
                                    <div className="mb-3 display-5"
                                        dangerouslySetInnerHTML={{ __html: contact.contactDetailsItem.html }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Landing;  
    