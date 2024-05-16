export const TIMELINE_STEPS = [
    {id: 1 , iconUrl: '/assets/archieved.svg', title:'Data Submission'},
    {id: 1 , iconUrl: '/assets/search.svg', title:'Review by Loop'},
    {id: 1 , iconUrl: '/assets/forward.svg', title:'Data sent to insurer'},
    {id: 1 , iconUrl: '/assets/prescription.svg', title:'UHID Generated'},
    {id: 1 , iconUrl: '/assets/card.svg', title:'E-Cards Recieved'}
]
export const generateEndorsemnetCards = (data) =>{ 
    const {endorsementCost, lifeCount} = data
    
    return [
    { 
        title: 'Endorsement Cost',
        iconUrl : '/assets/Ecost.svg',
        cardData : [
           { dataTitle : 'Total Cost (Dedunction - Refund)', dataValue :endorsementCost?.totalCost ||  0 },
           { dataTitle : 'Cost of Additions', dataValue : endorsementCost?.costOfAdditions || 0 }
        ]
    },
    { 
        title: 'Life Count',
        iconUrl : '/assets/LifeCount.svg',
        cardData : [
            { dataTitle : 'Total Life Count', dataValue : '1000000', dataValue: lifeCount?.totalLifeCount || 0  },
            { dataTitle : `No of Additions (${lifeCount.newLives} New Lives)`, dataValue : lifeCount?.noOfAdditions || 0}
        ]
    }

]};

export const  WARNING_DATA = {
    text:'All values are estimated figures, actual figures may slightly vary',
    icon :'/assets/Info.svg' 
}
export const  SIDEBAR_OPTIONS = [
    { id: '1',
      title: 'Endorsements',
      iconUrl:"/assets/Add Member.svg",
      url:"/"
    },
    { id: '2',
      title: 'CD Accounts',
      iconUrl:"/assets/Wallet.svg",
      url:"/"
    }
]
export const LOGO_IMAGE = '/assets/lo0p.svg';

export const API_URLS = {
    baseUrl: 'https://demo6728408.mockable.io',
    getAlerts: 'https://demo6728408.mockable.io/alerts',
    getEndorsement: 'https://demo6728408.mockable.io/overview'
}
export const ALERT_CTA_DATA = {
    label :'Alerts ⚠️',
    type: "alert",
    iconDirection:'right'
}
export const DOWNLOAD_MEMBER_LIST_CTA = {
    label :'Download Member List',
    iconUrl :'/assets/downLoadIcon.svg',
    iconDirection:'left'
}
export const ButtonTypeClassMap = {  //can be extended
    "primary" : 'button primary',
    "secondary" : 'button secondary',
    "alert" : "button alert",
    "icon" : "button icon"
};

