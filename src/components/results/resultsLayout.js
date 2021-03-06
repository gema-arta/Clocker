export const DefaultResultsLayouts = {
    // 12 columns
    lg: [
        { i: 'timings', w: 6, h: 1, x: 0, y: 0, isBounded: true },
        { i: 'headerLatency', w: 3, h: 2, x: 6, y: 0, isBounded: true },
        { i: 'dataUsage', w: 3, h: 2, x: 9, y: 0, isBounded: true },
        { i: 'progress', w: 6, h: 1, x: 0, y: 1, isBounded: true },
        { i: 'pageTable', w: 9, h: 5, x: 0, y: 2, isBounded: true },
        { i: 'console', w: 3, h: 5, x: 9, y: 2, isBounded: true },
        { i: 'metricsTable', w: 9, h: 6, x: 0, y: 7, isBounded: true },
        { i: 'loadChart', w: 5, h: 3, x: 7, y: 7, isBounded: true },
        { i: 'requestChart', w: 5, h: 3, x: 7, y: 10, isBounded: true },
    ],
    // 10 columns
    md: [
        { w: 6, h: 1, x: 0, y: 0, i: 'timings', isBounded: true },
        { w: 3, h: 2, x: 3, y: 2, i: 'headerLatency', isBounded: true },
        { w: 3, h: 2, x: 0, y: 2, i: 'dataUsage', isBounded: true },
        { w: 6, h: 1, x: 0, y: 1, i: 'progress', isBounded: true },
        { w: 10, h: 5, x: 0, y: 4, i: 'pageTable', isBounded: true },
        { w: 4, h: 4, x: 6, y: 0, i: 'console', isBounded: true },
        { w: 10, h: 5, x: 0, y: 12, i: 'metricsTable', isBounded: true },
        { w: 5, h: 3, x: 0, y: 9, i: 'loadChart', isBounded: true },
        { w: 5, h: 3, x: 5, y: 9, i: 'requestChart', isBounded: true },
    ],
    // 6 columns
    sm: [
        { w: 6, h: 1, x: 0, y: 0, i: 'timings', isBounded: true },
        { w: 2, h: 1, x: 2, y: 1, i: 'headerLatency', isBounded: true },
        { w: 2, h: 1, x: 4, y: 1, i: 'dataUsage', isBounded: true },
        { w: 2, h: 1, x: 0, y: 1, i: 'progress', isBounded: true },
        { w: 6, h: 5, x: 0, y: 4, i: 'pageTable', isBounded: true },
        { w: 6, h: 2, x: 0, y: 2, i: 'console', isBounded: true },
        { w: 6, h: 5, x: 0, y: 11, i: 'metricsTable', isBounded: true },
        { w: 3, h: 2, x: 0, y: 9, i: 'loadChart', isBounded: true },
        { w: 3, h: 2, x: 3, y: 9, i: 'requestChart', isBounded: true },
    ],
    // 4 columns
    xs: [
        { w: 4, h: 2, x: 0, y: 0, i: 'timings', isBounded: true },
        { w: 2, h: 2, x: 0, y: 2, i: 'headerLatency', isBounded: true },
        { w: 2, h: 2, x: 2, y: 2, i: 'dataUsage', isBounded: true },
        { w: 4, h: 1, x: 0, y: 4, i: 'progress', isBounded: true },
        { w: 4, h: 5, x: 0, y: 5, i: 'pageTable', isBounded: true },
        { w: 4, h: 2, x: 0, y: 10, i: 'console', isBounded: true },
        { w: 4, h: 5, x: 0, y: 12, i: 'metricsTable', isBounded: true },
        { w: 4, h: 3, x: 0, y: 17, i: 'loadChart', isBounded: true },
        { w: 4, h: 3, x: 0, y: 20, i: 'requestChart', isBounded: true },
    ],
    // 2 columns
    xxs: [
        { w: 2, h: 2, x: 0, y: 0, i: 'timings', isBounded: true },
        { w: 1, h: 2, x: 0, y: 2, i: 'headerLatency', isBounded: true },
        { w: 1, h: 2, x: 1, y: 2, i: 'dataUsage', isBounded: true },
        { w: 2, h: 1, x: 0, y: 4, i: 'progress', isBounded: true },
        { w: 2, h: 5, x: 0, y: 5, i: 'pageTable', isBounded: true },
        { w: 2, h: 3, x: 0, y: 10, i: 'console', isBounded: true },
        { w: 2, h: 6, x: 0, y: 19, i: 'metricsTable', isBounded: true },
        { w: 2, h: 3, x: 0, y: 13, i: 'loadChart', isBounded: true },
        { w: 2, h: 3, x: 0, y: 16, i: 'requestChart', isBounded: true },
    ],
};
