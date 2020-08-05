import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useStores } from './../hooks/useStores';
import { PageTitle } from './../components/pageTitle';
import { DefaultSettingsLayouts } from './../components/settings/settingsLayout';
import { WebsiteSelector } from './../components/settings/websiteSelector';
import colors from './../components/charts/colorPalette.json';

// <ResponsiveReactGridLayout> takes width to calculate positions on drag events.
// WidthProvider can be used to automatically determine width upon initialization and window resize events.
const ResponsiveGridLayout = WidthProvider(Responsive);

export const SettingsPage = () => {
    //get the settings to see if we have any saved layouts
    const { Settings } = useStores();

    return (
        <>
            <Container text textAlign='center'>
                <PageTitle
                    title='Settings'
                    subtitle='Change test job settings'
                    dividing={false}
                />
            </Container>
            <Container fluid>
                <ResponsiveGridLayout
                    className='layout'
                    layouts={
                        Object.keys(Settings.settingsLayouts).length
                            ? Settings.settingsLayouts
                            : DefaultSettingsLayouts
                    }
                    breakpoints={{
                        lg: 1200,
                        md: 996,
                        sm: 768,
                        xs: 480,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    margin={[10, 10]}
                    containerPadding={[10, 10]}
                >
                    <div key='bandwidth'>
                        <Segment
                            textAlign='center'
                            style={{
                                backgroundColor: colors.background,
                                borderRadius: '0',
                            }}
                        >
                            <Header as='h4' content='Bandwidth' />
                        </Segment>
                        bandwidth settings widget
                    </div>
                    <div key='latency'>
                        <Segment
                            textAlign='center'
                            style={{
                                backgroundColor: colors.background,
                                borderRadius: '0',
                            }}
                        >
                            <Header as='h4' content='Latency' />
                        </Segment>
                        latency settings widget
                    </div>
                    <div key='webPageSelector'>
                        <Segment
                            textAlign='center'
                            style={{
                                backgroundColor: colors.background,
                                borderRadius: '0',
                            }}
                        >
                            <Header as='h4' content='Web Pages' />
                        </Segment>
                        <WebsiteSelector />
                    </div>
                    <div key='pageIterations'>
                        <Segment
                            textAlign='center'
                            style={{
                                backgroundColor: colors.background,
                                borderRadius: '0',
                            }}
                        >
                            <Header as='h4' content='Page Iterations' />
                        </Segment>
                        Page Iterations settings widget
                    </div>
                    <div key='mobileEmulation'>
                        <Segment
                            textAlign='center'
                            style={{
                                backgroundColor: colors.background,
                                borderRadius: '0',
                            }}
                        >
                            <Header as='h4' content='Mobile Emulation' />
                        </Segment>
                        mobileEmulation settings widget
                    </div>
                </ResponsiveGridLayout>
            </Container>
        </>
    );
};
