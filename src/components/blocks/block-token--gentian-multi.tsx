import { ColorStyle } from "@/utils/colorclass";
import CustomButton from '../elements/element-button';

interface saleInfor {
    title: string;
    value: string
}

interface tokenStageInfor{
    title: string,
}

interface progressPoint{
    id: number,
    title: string,
    percent: string
}

interface chartAllocation{
    title: string,
    amount: string,
    color: string
}

interface TokenProps {
    tokenData:{
        sales:{
            mainTitle: string,
            saleInfor: saleInfor[]
        },
        saleStage:{
            mainTitle: string,
            progessInfor: string,
            progressValue: string,
            progressBar: {
                progressPercent: string,
                progressPoint: progressPoint[]
            },
            button: {
                title: string,
                links: string
            },
            minPurchase: string,
            bonus: {
                left:{
                    percent:string,
                    smallText: string,
                    date: string,
                    badge: string,
                },
                right:{
                    percent: string,
                    smallText: string,
                    date: string
                }
            }
        }
        tokenAllocation:{
            mainTitle: string,
            chart: chartAllocation[]
        },
        fundsAllocation:{
            mainTitle: string,
            chart: chartAllocation[]
        }
    }
}

const Token = ({
    tokenData
}: TokenProps) => {
  return (
    <>
        <section className="bg-theme bg-pattern-dots" id="tokens">
            <div className="section section-tokensale tc-light">
                <div className="container">
                    <div className="section-head text-center wide-auto">
                        <h2 className="title animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }}>ICOX Tokens</h2>
                        <p className="animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: "0.2s" }}>Our Tokens with a realworld use case created on the blockchain network.</p>
                    </div>
                    <div className="nk-block nk-block-token mgb-m30">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="token-info bg-theme animated" data-animate="fadeInUp" data-delay=".3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                                    <h4 className="title title-md mb-2 text-sm-center">{tokenData.sales.mainTitle}</h4>
                                    {/* table class conflict between gentian.css and vendor.bundle.css */}
                                    <table className="table table-s1 table-token " style={{color: 'inherit'}}>
                                        <tbody>
                                            {tokenData.sales.saleInfor.map((infor, index)=>(
                                                <tr key={index}>
                                                    <td className="table-head">{infor.title}</td>
                                                    <td className="table-des">{infor.value}</td>
                                                 </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="animated" data-animate="fadeInUp" data-delay=".4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                                    <div className="token-status bg-theme">
                                        <h4 className="title title-md">{tokenData.saleStage.mainTitle}</h4>
                                        <div className="token-countdown countdown" data-date="2023/04/27"></div>
                                        <div className="progress-wrap progress-wrap-point">
                                            <span className="progress-info">{tokenData.saleStage.progessInfor} <span>{tokenData.saleStage.progressValue}</span></span>
                                            <div className="progress-bar">
                                                <div className="progress-percent bg-grad" data-percent={`${tokenData.saleStage.progressBar.progressPercent}`} style={{paddingRight: `${tokenData.saleStage.progressBar.progressPercent}%` }}></div>
                                                {tokenData.saleStage.progressBar.progressPoint.map((point)=>(
                                                    <div key={point.id} className={`progress-point progress-point-${point.id}`}>{point.title} {/* <span>$1.75m</span> */}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <CustomButton
                                            variant={ColorStyle.Gradient}
                                        >
                                            {tokenData.saleStage.button.title}
                                        </CustomButton>
                                        <span className="token-min">{tokenData.saleStage.minPurchase}</span>
                                    </div>
                                    <div className="bonus bg-theme">
                                        <div className="bonus-info">
                                            <div className="bonus-percent">{tokenData.saleStage.bonus.left.percent} <small>{tokenData.saleStage.bonus.left.smallText}</small></div>
                                            <div className="bonus-date">{tokenData.saleStage.bonus.left.date}</div>
                                            <span className="bonus-badge badge-xs">{tokenData.saleStage.bonus.left.badge}</span>
                                        </div>
                                        <div className="bonus-info">
                                            <div className="bonus-percent">{tokenData.saleStage.bonus.right.percent}<small>{tokenData.saleStage.bonus.right.smallText}</small></div>
                                            <div className="bonus-date">{tokenData.saleStage.bonus.right.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-tokendes">
                <div className="container">
                    <div className="nk-block nk-block-alocation mgb-m30">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="token-alocate-item animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }}>
                                    <div className="token-alocate-graph">
                                        <span>{tokenData.tokenAllocation.mainTitle}</span>
                                        <canvas className="chart-canvas" id="token-alocate"></canvas>
                                    </div>
                                    <ul className="chart-data" data-canvas="token-alocate" data-canvas-type="doughnut">
                                        {tokenData.tokenAllocation.chart.map((item,index)=>(
                                            <li key={index} data-color={item.color} data-title={item.title} data-amount={item.amount}></li>               
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="token-alocate-item animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: "0.2s" }}>
                                    <div className="token-alocate-graph">
                                        <span>{tokenData.fundsAllocation.mainTitle}</span>
                                        <canvas className="chart-canvas" id="fund-alocate"></canvas>
                                    </div>
                                    <ul className="chart-data" data-canvas="fund-alocate" data-canvas-type="doughnut">
                                        {tokenData.fundsAllocation.chart.map((item,index)=>(
                                            <li key={index} data-color={item.color} data-title={item.title} data-amount={item.amount}></li>               
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-ovm ovm-bottom ovm-h-70 bg-light"></div>
            </div>
        </section>
   </>
  )
}

export default Token

/* prop
const tokenData={
    sales:{
            mainTitle: 'Sales Information',
            saleInfor: [
                { title: 'Public Sale Starts', value: '15th Nov 2022 12:00 GMT' },
                { title: 'Public Sale Ends', value: '14th Dec 2022 12:00 GMT' },
                { title: 'Total Token Supply', value: '500,000,000' },
                { title: 'Tokens Allocated for ICO', value: '350,000,000' },
                { title: 'Hard Cap', value: '$4.75m' },
                { title: 'Soft Cap', value: '$1.75m' },
                { title: 'Token Value', value: '1 ETH = 1,000 ICOX' },
                { title: 'Accepted', value: 'ETH, BTC' },            ]
             },
             saleStage: {
                mainTitle: 'Token Sale Stage End In',
                progessInfor: 'Raised so far',
                progressValue: '$1,830,985',
                progressBar: {
                    progressPercent: 30,
                    progressPoint:[
                        { id: 1, title: 'Soft Cap', percent: '' }
                        { id: 2, title: 'Hard Cap', percent: '' }                         
                    ]
                },
                button: {
                    title: 'Register Buy Token Now',
                    links: '#'
                },
                minPurchase: 'Minimum Purchase: 200 ICOX',
                bonus: {
                    left:{
                        percent:'50%',
                        smallText: 'bonus',
                        date: 'End at 30 Nov, 2022',
                        badge: 'Now',
                    },
                    right:{
                        percent: '25%',
                        smallText: 'bonus',
                        date: 'Start at 01 Dec, 2022'
                    }
                }
             }
            tokenAllocation:{
                mainTitle: 'Token Allocation',
                chart:[
                    {title: 'Token Sale Program', amount: '60', color: '#223fa8'},
                    {title: 'Reserve Fund', amount: '8', color: '#8fa0df'},
                    {title: 'Team and Founders', amount: '15', color: '#4aa0f6'},
                    {title: 'Board Advisors', amount: '4', color: '#6ad9ac'},
                    {title: 'Ecosystem Development', amount: '7', color: '#4d6fe9'},
                    {title: 'Marketing and Bounty', amount: '6', color: '#15216d'},
                ]
            },
            fundsAllocation:{
                mainTitle: 'Funds Allocation',
                chart:[
                    { title: 'Engineering and Development', amount: 40, color: '#15216d' },
                    { title: 'Business Development', amount: 12, color: '#4aa0f6' },
                    { title: 'Marketing & Promotion', amount: 20, color: '#223fa8' },
                    { title: 'Legal & Regulation', amount: 10, color: '#72a3f4' },
                    { title: 'Operational & Administration', amount: 8, color: '#6ad9ac' },
                    { title: 'Contingency', amount: 4, color: '#8fa0df' },
                    { title: 'Partners', amount: 6, color: '#4d6fe9' },
                ]
            }
}
*/