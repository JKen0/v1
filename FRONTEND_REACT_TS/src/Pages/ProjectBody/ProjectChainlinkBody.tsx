import React from 'react'
import { Typography, Divider, Card, CardContent, Button, Grid } from '@mui/material'

const ProjectChainlinkBody = () => {


    return (
        <>
            <Divider style={{ paddingTop: "5px", paddingBottom: "5px" }} />

            <Typography style={{ paddingTop: "5px", paddingBottom: "5px" }} variant="h5">
                Introduction/Problem
            </Typography>
            <Typography variant="body1">
                The current landscape of insurance often relies on manual processes for assessing policy conditions and determining whether payouts are warranted based on
                factors such as weather data. However, this manual approach can be inefficient and prone to errors. By leveraging application programming interfaces (APIs)
                and technologies like Chainlink nodes, there is an opportunity to automate these processes, streamlining the assessment of policy conditions and enabling more
                accurate decision-making. This shift towards automation has the potential to improve the efficiency of insurance operations, reduce the reliance on manual
                data checks, and enhance the overall reliability and effectiveness of insurance policies.
                <br /><br />
                This project will focus on automating crop insurance policies,particularly in scenarios where insufficient or excessive rainfall occurs during a specific
                season, showcasing the potential benefits of leveraging modern technology in the insurance industry.
            </Typography>

            <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <img
                    src="https://s.yimg.com/ny/api/res/1.2/4x4sY9RYjoZZwiIlbrlEbQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-10/925dd7b0-5705-11ed-be97-639970c21585" // Replace "./stock-image.jpg" with the actual path to your image file
                    alt="Stock Image"
                    style={{ maxHeight: 200, maxWidth: '100%', display: 'block', margin: 'auto' }}
                />
            </div>

            <Divider style={{ paddingTop: "5px", paddingBottom: "5px" }} />

            <Typography style={{ paddingTop: "5px", paddingBottom: "5px" }} variant="h5">
                Implementation
            </Typography>

            <Typography variant="body1">
                The implementation of the project involved setting up and configuring a Chainlink node to perform various tasks crucial to the automation of crop
                insurance policies. These tasks included fetching data from an external API containing relevant weather information, formatting this data to meet the
                requirements of the smart contract, and returning the formatted values to the contract for further processing. With the Chainlink node operational, the smart
                contract could seamlessly update its values based on the retrieved data, initiating automated processes to determine whether policyholders should receive
                payouts, all without the need for manual intervention.
            </Typography>

            <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <img
                    src="https://i.ibb.co/C6v7hMt/Chainlink-Automation.png" // Replace "./stock-image.jpg" with the actual path to your image file
                    alt="Stock Image"
                    style={{ maxHeight: 400, maxWidth: '100%', display: 'block', margin: 'auto' }}
                />
                <Typography variant="body2" color="text.secondary">
                    Figure 1: This image shows the proceess of what happens with insurance policies that rely on public and available data.
                </Typography>
            </div>

            <Typography variant="body1">
                In real-world applications of Chainlink, where multiple nodes are employed to fetch weather data, a mechanism for incentivizing the return of correct data is
                crucial for maintaining the integrity of the system. This is typically achieved through a system of rewards and penalties built into the protocol.
                Nodes that consistently provide accurate and reliable data are rewarded with tokens, serving as an incentive for them to continue behaving honestly.
                <br /><br />
                Furthermore, Chainlink's decentralized oracle network provides tamper-proof data feeds, ensuring the integrity and accuracy of the information used in smart
                contracts. Additionally, Chainlink's extensive network of nodes enables access to a wide range of data sources, increasing the versatility and reliability of
                blockchain-based applications across various industries, from finance to supply chain management.
            </Typography>

            <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <img
                    src="https://i.ibb.co/5cVpYrV/smart-contracts-in-insurance.jpg" // Replace "./stock-image.jpg" with the actual path to your image file
                    alt="Stock Image"
                    style={{ maxHeight: 400, maxWidth: '100%', display: 'block', margin: 'auto' }}
                />
                <Typography variant="body2" color="text.secondary">
                    Figure 2: This image shows the benefit of using Chainlink and decentralized oracles and how multiple chainlink nodes are utlized in order to evaluate a
                    weather contract. This is to make sure the node is not faulty or acting in bad faith in order to benefit the sole policy holder.
                </Typography>
            </div>


            <Divider style={{ paddingTop: "5px", paddingBottom: "5px" }} />

            <Typography style={{ paddingTop: "5px", paddingBottom: "5px" }} variant="h5">
                Conclusion / Future Work
            </Typography>
            The successful implementation of an automated smart insurance policy, leveraging technologies like Chainlink and APIs, highlights the potential for innovation in
            the insurance industry. By automating processes such as data retrieval and policy assessment, smart contracts can enhance efficiency, reduce costs, and improve
            the accuracy of decision-making. However, to fully realize the benefits of such systems, further improvements can be made, such as developing full-stack
            applications with user interfaces. These applications would enable policyholders to easily view and manage their policies, providing transparency and
            accessibility. 
            <Typography variant="body1">

            </Typography>

            <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <img
                    src="https://i.ibb.co/vDkjyn7/image.png" // Replace "./stock-image.jpg" with the actual path to your image file
                    alt="Stock Image"
                    style={{ maxHeight: 400, maxWidth: '100%', display: 'block', margin: 'auto' }}
                />
                <Typography variant="body2" color="text.secondary">
                    Figure 3: This image shows the visualization of what a front end application could look like, where you can seee all of your policies alonng with all of the
                    data about the policy and weather a final decision was made.
                </Typography>
            </div>

            <Divider style={{ paddingTop: "5px", paddingBottom: "5px" }} />


            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card variant="outlined">
                        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Repository" style={{ width: '100%', maxHeight: 100, objectFit: 'cover' }} />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                GitHub Repoistory
                            </Typography>
                            <Button variant="contained" href="https://github.com/JKen0/cas-720-project" target="_blank" rel="noopener noreferrer">
                                View Code
                            </Button>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}

export default ProjectChainlinkBody;