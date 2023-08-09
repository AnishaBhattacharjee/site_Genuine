import React, { useEffect, useState } from 'react'
import Layout from '../Component/Layout/Layout'
import { getTrainer } from '../Component/Api/FetchApi';

const Trainer = () => {
    const [trainer, setTrainer] = useState([]);

    const getTrainerDetails = async () => {
        const response = await getTrainer()
        setTrainer(response)
    }


    useEffect(() => {
        getTrainerDetails()
    }, [])

    console.log(trainer);

    return (
        <>
            <Layout>
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Trainers</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>

                <section id="trainers" className="trainers">
                    <div className="container" data-aos="fade-up">
                        <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                            {
                                trainer?.data?.map((tdata, index) => {
                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                                <div className="member">
                                                    <img src={tdata.img_url} className="img-fluid" alt />
                                                    <div className="member-content">
                                                        <h4>{tdata.name}</h4>
                                                        <span>{tdata.designation}</span>
                                                        <p>
                                                            {tdata.about}
                                                        </p>
                                                        <div className="social">
                                                            <div className="social">
                                                                <a href="https://twitter.com/"><i className="bi bi-twitter" /></a>
                                                                <a href="https://github.com/"><i className="bi bi-github" /></a>
                                                                <a href=""><i className="bi bi-linkedin" /></a>
                                                                <a href=""></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }


                        </div>
                    </div>
                </section>


            </Layout>
        </>
    )
}

export default Trainer