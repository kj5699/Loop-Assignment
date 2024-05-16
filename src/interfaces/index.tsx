export interface  SideBarOptionProps{
    id: string;
    title :string;
    iconUrl ? : string;
    url: string;
    isActive?: Boolean;
    onClick?: any;
}

export interface InsuranceData {
    title?: string;
    image?: string;
    tags?: string[];
}
  
export  interface EndorsementCostData {
    totalCost?: number;
    costOfAdditions?: number;
}
  
export interface LifeCountData {
    totalLifeCount?: string;
    newLives?: string;
    noOfAdditions?: string;
}
  
export interface EndorsementData {
    insurance: InsuranceData;
    endorsementCost: EndorsementCostData;
    lifeCount: LifeCountData;
}

export interface EndorsementState {
    data: EndorsementData;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface AlertsData {
    data: {
        alerts: {
            insurance?: InsuranceData,
            count?: number,
            claimsUnderQuery?: number

        }
    },
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

export interface EndorsementDataGridProps{
    data:{
        endorsementCost:EndorsementCostData, 
        lifeCount:LifeCountData
    }
}

export interface ModalProps {
    show: boolean;
    onClose: () => void;
}

export interface ModelContentProps {
    image: string;
    title: string;
    tags: string[];
    claimsUnderQuery: number;
}

type ButtonType = "primary" | "secondary" | "alert" | "icon"
export interface ButtonProps {
    label: string;
    onClick : any;
    iconUrl?: any;
    iconDirection?: string
    type?: ButtonType;
};