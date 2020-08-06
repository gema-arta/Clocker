import {
    observable,
    extendObservable,
    toJS,
    decorate,
    reaction,
    computed,
} from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import {
    RoundedAverage,
    RoundedAverageMegaBytes,
    TotalMegaBytes,
} from './../utils/arrayFunctions';

//for testing purposes
import { makeData } from './../__test__/makeData';

export class JobStore {
    constructor() {
        this.jobs = [];
        this.activeIndex = 0;
        this.isLoading = false;
        this.isLoadError = false;

        //for testing purpose we need to add a fake job
        const job = new Job({});
        this.jobs.push(job);
    }
    //we need a routine to load all the jobs from the database into the observable on start
}

//then add the decorations to make the relevant features of the list observable
decorate(JobStore, {
    jobs: observable,
    activeIndex: observable,
    isLoading: observable,
    isLoadError: observable,
});

export class Job {
    constructor(options) {
        //always use the default settings
        var defaults = {
            name: 'N/A',
            id: uuidv4(),
            createdAt: Date.now(),
            updatedtAt: Date.now(),
            settings: {},
            consoleMessages: [],
            pages: [],
            //the job must contain reporting stats on its contained pages, the average for the important indicators
            dclAverage: 0,
            completeAverage: 0,
            dataUsageAverage: 0,
            headerTimingsAverage: 0,
            imageRequestsAverage: 0,
            fontRequestsAverage: 0,
            mediaRequestsAverage: 0,
            cssRequestsAverage: 0,
            scriptRequestsAverage: 0,
            //then we need to see totals for comparative purposes
            imageLoadTotal: 0,
            mediaLoadTotal: 0,
            fontLoadTotal: 0,
            cssLoadTotal: 0,
            scriptLoadTotal: 0,
        };

        // create a new object with the defaults over-ridden by the options passed in
        let opts = Object.assign({}, defaults, options);

        // assign options to instance data (using only property names contained in defaults object to avoid copying properties we don't want)
        Object.keys(defaults).forEach((prop) => {
            this[prop] = opts[prop];
        });

        //then each job needs to automatically update its reporting stats
        reaction(
            () => this.pages,
            (pagesArray) => {
                console.log('reaction: Autogenerating Job Reporting Stats');
                //first we work out the averages
                this.dclAverage = pagesArray
                    .map((item) => item.dclAverage)
                    .reduce(RoundedAverage, 0);
                this.completeAverage = pagesArray
                    .map((item) => item.completeAverage)
                    .reduce(RoundedAverage, 0);
                this.dataUsageAverage = pagesArray
                    .map((item) => item.dataUsageAverage)
                    .reduce(RoundedAverageMegaBytes, 0);
                this.headerTimingsAverage = pagesArray
                    .map((item) => item.headerTimingsAverage)
                    .reduce(RoundedAverage, 0);
                this.imageRequestsAverage = pagesArray
                    .map((item) => item.imageRequestsAverage)
                    .reduce(RoundedAverage, 0);
                this.fontRequestsAverage = pagesArray
                    .map((item) => item.fontRequestsAverage)
                    .reduce(RoundedAverage, 0);
                this.mediaRequestsAverage = pagesArray
                    .map((item) => item.mediaRequestsAverage)
                    .reduce(RoundedAverage, 0);
                this.cssRequestsAverage = pagesArray
                    .map((item) => item.cssRequestsAverage)
                    .reduce(RoundedAverage, 0);
                this.scriptRequestsAverage = pagesArray
                    .map((item) => item.scriptRequestsAverage)
                    .reduce(RoundedAverage, 0);
                //then we work out the running totals
                this.imageLoadTotal = pagesArray
                    .map((item) => item.imageLoadAverage)
                    .reduce(TotalMegaBytes, 0);
                this.mediaLoadTotal = pagesArray
                    .map((item) => item.mediaLoadAverage)
                    .reduce(TotalMegaBytes, 0);
                this.fontLoadTotal = pagesArray
                    .map((item) => item.fontLoadAverage)
                    .reduce(TotalMegaBytes, 0);
                this.cssLoadTotal = pagesArray
                    .map((item) => item.cssLoadAverage)
                    .reduce(TotalMegaBytes, 0);
                this.scriptLoadTotal = pagesArray
                    .map((item) => item.scriptLoadAverage)
                    .reduce(TotalMegaBytes, 0);
                //and update the date
                this.updatedAt = Date.now();
            }
        );

        //then for testing purposes we need to add some fake data
        const testData = makeData(20);
        const testPages = testData.map((page) => new Page(page));
        this.pages = [...this.pages, ...testPages];
    }
}

decorate(Job, {
    consoleMessages: observable,
    pages: observable,
    //the job must contain reporting stats on its contained pages, the average for the important indicators
    dclAverage: observable,
    completeAverage: observable,
    dataUsageAverage: observable,
    headerTimingsAverage: observable,
    imageRequestsAverage: observable,
    fontRequestsAverage: observable,
    mediaRequestsAverage: observable,
    cssRequestsAverage: observable,
    scriptRequestsAverage: observable,
    //then we need to see totals for comparative purposes
    imageLoadTotal: observable,
    mediaLoadTotal: observable,
    fontLoadTotal: observable,
    cssLoadTotal: observable,
    scriptLoadTotal: observable,
});

export class Page {
    constructor(options) {
        //always use the default settings
        var defaults = {
            url: 'N/A',
            jobId: 'N/A',
            id: uuidv4(),
            createdAt: Date.now(),
            //we always indicate average as we may run multiple iterations
            dclAverage: 0,
            completeAverage: 0,
            dataUsageAverage: 0,
            headerTimingsAverage: 0,
            imageLoadAverage: 0,
            mediaLoadAverage: 0,
            fontLoadAverage: 0,
            cssLoadAverage: 0,
            scriptLoadAverage: 0,
            imageRequestsAverage: 0,
            mediaRequestsAverage: 0,
            fontRequestsAverage: 0,
            cssRequestsAverage: 0,
            scriptRequestsAverage: 0,
            //and we can save screenshot of page
            screenshot: '',
        };

        // create a new object with the defaults over-ridden by the options passed in, none in this case
        let opts = Object.assign({}, defaults, options);

        // assign options to instance data (using only property names contained in defaults object to avoid copying properties we don't want)
        Object.keys(defaults).forEach((prop) => {
            this[prop] = opts[prop];
        });
    }
}
