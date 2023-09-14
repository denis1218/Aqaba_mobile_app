import People from "../../components/club/people/people";
import Companies from "../../components/fund/companies";
import Summary from "../../components/fund/individual/summary";
import Investors from "../../components/fund/investors";
import Home from "../../components/marketplace/seller/home";
import Inventory from "../../components/marketplace/seller/inventory";
import MarketplaceProfile from '../../components/marketplace/seller/profile';
import Indices from "../../components/platform/bottom/indices";
import TopNews from "../../components/platform/top/topnews";

export const platfrom_first_list = (nav: any, type: number) => {
    return [
        {
            label: 'Top News',
            content: <TopNews navigation={nav} type={type} />
        },
        {
            label: 'Markets',
            content: <></>
        },
        {
            label: 'Stocks',
            content: <></>
        },
        {
            label: 'Personal Finance',
            content: <></>
        },
        {
            label: 'Business',
            content: <></>
        }
    ]
}

export const platform_second_list = (nav: any, type: number) => {
    return [
        {
            label: 'Indices',
            content: <Indices navigation={nav} type={type} />
        },
        {
            label: 'Currencies',
            content: <></>
        },
        {
            label: 'Futures',
            content: <></>
        },
        {
            label: 'Crypto',
            content: <></>
        },
        {
            label: 'Bonds',
            content: <></>
        }
    ]
}

export const club_list = (nav: any, type: number) => {
    return [
        {
            label: 'People',
            content: <People />
        },
        {
            label: 'Watchlist',
            content: <></>
        },
        {
            label: 'Suggested',
            content: <></>
        },
        {
            label: 'Charts',
            content: <></>
        },
        {
            label: 'Trending',
            content: <></>
        }
    ]
}

export const fund_list = (nav: any, type: number) => {
    return [
        {
            label: 'Companies',
            content: <Companies navigation={nav} />
        },
        {
            label: 'Investors',
            content: <Investors navigation={nav} />
        },
        {
            label: 'Funding Rounds',
            content: <></>
        },
        {
            label: 'Acquisitions',
            content: <></>
        },
        {
            label: 'People',
            content: <></>
        }
    ]
}

export const company_individual_list = (nav: any, info: any) => {
    return [
        {
            label: 'Summary',
            content: <Summary navigation={nav} info={info} />
        },
        {
            label: 'Financials',
            content: <></>
        },
        {
            label: 'People',
            content: <></>
        },
        {
            label: 'Technology',
            content: <></>
        },
        {
            label: 'Signals and Signs',
            content: <></>
        }
    ]
}

export const marketplace_seller_list = (nav: any) => {

    return [
        {
            label: 'Home',
            content: <Home />
        },
        {
            label: 'Orders',
            content: <></>
        },
        {
            label: 'Inventory',
            content: <Inventory />
        },
        {
            label: 'Payments',
            content: <></>
        },
        {
            label: 'Profile',
            content: <MarketplaceProfile navigation={nav} />
        }
    ]
}