import { useState } from 'react'
import { Tab } from '@headlessui/react'
import LaborInformation from './components/LaborInformation'
import QualificationEPS from './components/QualificationEPS'
import QualificationARL from './components/QualificationARL'
import JRC from './components/JRC'
import JNC from './components/JNC'
import FinalInstance from './components/FinalInstance'
import StatusARL from './components/StatusARL'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    let [tabs] = useState({
        "Información Laboral": [],
        "Calificación EPS": [],
        "Calificación ARL": [],
        "JRC": [],
        "JNC": [],
        "Instancia Final": [],
        "Estado ARL": [],
    })

    return (
        <div className="py-1 flex justify-center">
            <div className="md:w-full xl rounded py-3 px-5">
                <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1 bg-gray-9-900/20 rounded-xl">
                        {Object.keys(tabs).map((tab) => (
                            <Tab
                                key={tab}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-sm leading-5 font-medium text-gray-8 rounded-lg',
                                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-white ring-red-1',
                                        selected
                                            ? 'bg-red-1 shadow'
                                            : 'text-gray-500 hover:bg-red-1 hover:text-white'
                                    )
                                }
                            >
                                {tab}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <LaborInformation />
                        </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <QualificationEPS />
                        </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-red-1 ring-white ring-opacity-60'
                            )}
                        >
                            <QualificationARL />
                        </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <JRC />
                        </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <JNC />
                        </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <FinalInstance />
                        </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <StatusARL />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}