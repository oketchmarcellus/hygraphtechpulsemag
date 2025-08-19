import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_POST_DATA = gql`
query ShopPage($shopPageSlug:String) {
  productListing(where: {slug: $shopPageSlug}) {
    slug
    productListingPageTitle
    listedTechPulseProducts {
      _links {
        self {
          href
        }
      }
      id
      images {
        name
        src
      }
      permalink
      price
      slug
      short_description
    }
  }
}
`;

const Shop = () => {
    const { shopPageSlug = 'shop' } = useParams(); // Get postSlug from URL
    const { loading, error, data } = useQuery(GET_POST_DATA, {
        variables: { shopPageSlug }, // Use the shoppageSlug variable
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const shopPageContent = data?.productListing ?? [];
    const productListings = shopPageContent.listedTechPulseProducts ?? [];
    console.log('Shop Page Content:', shopPageContent);
     return (
        <>
            <section className="pricing02 cid-uTAqkzF4zW shop" id="product-list-9-uTAqkzF4zW" style={ {backgroundColor:'#fefae6' }}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn">
                                    <strong>{shopPageContent.productListingPageTitle}</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {productListings.map((showproduct) => (
                            <div className="item features-image col-12 col-md-6 col-lg-4 animate__animated animate__delay-1s animate__fadeIn"
                                key={showproduct.id}>
                                <div className="item-wrapper">
                                    <div className="item-img">
                                        {/* Use product.image if available, fallback to a placeholder */}
                                            <img src={showproduct.images[0]?.src || '/src/assets/savedsources/saved_resource(11).jpeg'} alt={showproduct.name ?? ""} />
                                    </div>
                                    <div className="item-content">
                                        <h5 className="item-title mbr-fonts-style display-5"><strong>{showproduct.name}</strong>
                                        </h5>
                                        <h6 className="item-subtitle mbr-fonts-style display-7"> ${showproduct.price}</h6>
                                        <p className="mbr-text mbr-fonts-style display-7"
                                        dangerouslySetInnerHTML={{ __html: showproduct.short_description }}
                                        />
                                        <div className="mbr-section-btn item-footer">
                                            <a href={showproduct.permalink} className="btn item-btn btn-primary display-7" target="_blank" rel="noopener noreferrer">
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
        </>
    );
}
export default Shop;