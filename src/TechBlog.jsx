import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import placholderImage from './assets/savedsources/saved_resource(11).jpeg';

const GET_POST_DATA = gql`
query BlogPage($blogPageSlug: String) {
  blog(where: {slug: $blogPageSlug}) {
    slug
    blogPageTitle
    techPulseBlogPosts
  }
}
`;

const TechBlog = () => {
    const { blogPageSlug = 'blog' } = useParams(); // Get postSlug from URL
    const { loading, error, data } = useQuery(GET_POST_DATA, {
        variables: { blogPageSlug }, // Use the blogpageSlug variable
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const blogPageTitle=data?.blog.blogPageTitle;
    const blogPageContent = data?.blog.techPulseBlogPosts ?? [];
    const blogPostImages = blogPageContent.images;
    // const blogPostItems = blogPageContent.listedTechPulseProducts ?? [];
    console.log('Blog Page Content:', blogPageContent);
    console.log('Blog Page images:', blogPostImages);
     return (
        <>
            <section className="features03 cid-uTAqkzFWbz blog" id="news-1-uTAqkzFWbz">
                <div className="container-fluid">
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                    <strong>{blogPageTitle}</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blogPageContent.map(wordpost => (
                        <div className="item features-image col-12 col-md-6 col-lg-3 active animate__animated animate__delay-1s animate__fadeIn" key={wordpost.id}>
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src={wordpost.images?.src || placholderImage } />
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                                        <strong><a className="text-black fw-bold" href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#">{wordpost.title.rendered}</a></strong>
                                    </h6>
                                    <p className="mbr-text mbr-fonts-style mb-3 display-7">{wordpost.date}</p>
                                    <p className="mbr-text mbr-fonts-style mb-3 display-7 mini-excerpt" dangerouslySetInnerHTML={{ __html: wordpost.excerpt.rendered }}/>
                                    <div className="mbr-section-btn item-footer"><a href="https://ai-builder.mobirise.com/pages/iUc7ROw3Kwx452_MyEyid#" className="btn item-btn btn-primary display-7">More</a></div>
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
export default TechBlog;