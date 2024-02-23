import React from 'react';
import Image1 from './about-icon-1.png'

export default function HomeComp5() {
    return (
        <>


            <div className="container px-4 py-5" id="icon-grid">
                <h2 className="pb-2 border-bottom"></h2>
                

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 g-font-b">
                    <div className="col d-flex align-items-start">
                        <img src={Image1} className='mx-4' />
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Fresh products</h3>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <img src={Image1} className='mx-4' />
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Various roast</h3>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <img src={Image1} className='mx-4' />
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Friendly staff</h3>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <img src={Image1} className='mx-4' />
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Large menu</h3>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>

                </div>

                <h2 className="pb-2 border-bottom"></h2>
            </div>
        </>
    )
}
