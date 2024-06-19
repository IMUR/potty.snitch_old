npm run test:jest
PS E:\Dropbox\Potty Snitch\Repos\potty.snitch> npm run test:jest

> potty-snitch@0.1.0 test:jest
> jest --coverage

  console.error
    autocomplete or addListener is not defined

      67 |         });
      68 |       } else {
    > 69 |         console.error('autocomplete or addListener is not defined');
         |                 ^
      70 |       }
      71 |     
      72 |       autocompleteRef.current = autocomplete;

      at error (src/components/Form.js:69:17)
      at initAutocomplete (src/components/Form.js:76:7)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom.development.js:23189:26)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom.development.js:24970:11)
      at commitPassiveMountEffects_complete (node_modules/react-dom/cjs/react-dom.development.js:24930:9)
      at commitPassiveMountEffects_begin (node_modules/react-dom/cjs/react-dom.development.js:24917:7)
      at commitPassiveMountEffects (node_modules/react-dom/cjs/react-dom.development.js:24905:3)
      at flushPassiveEffectsImpl (node_modules/react-dom/cjs/react-dom.development.js:27078:3)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom.development.js:27023:14)
      at node_modules/react-dom/cjs/react-dom.development.js:26808:9
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/App.test.js:34:9)

  console.error                                                                                                                                                                                                                                                               
    User location is not available.

      26 |     const initMap = () => {
      27 |       if (!userLocation) {
    > 28 |         console.error('User location is not available.');
         |                 ^
      29 |         return;
      30 |       }
      31 |

      at error (src/components/Map.js:28:17)
      at initMap (src/components/Map.js:22:9)
      at loadGoogleMaps (src/components/Map.js:95:5)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom.development.js:23189:26)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom.development.js:24970:11)
      at commitPassiveMountEffects_complete (node_modules/react-dom/cjs/react-dom.development.js:24930:9)
      at commitPassiveMountEffects_begin (node_modules/react-dom/cjs/react-dom.development.js:24917:7)
      at commitPassiveMountEffects (node_modules/react-dom/cjs/react-dom.development.js:24905:3)
      at flushPassiveEffectsImpl (node_modules/react-dom/cjs/react-dom.development.js:27078:3)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom.development.js:27023:14)
      at node_modules/react-dom/cjs/react-dom.development.js:26808:9
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/App.test.js:34:9)

  console.error
    Error: Uncaught [TypeError: window.google.maps.Marker is not a constructor]
        at reportException (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jsdom\lib\jsdom\living\helpers\runtime-script-errors.js:66:24)
        at innerInvokeEventListeners (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:353:9)
        at invokeEventListeners (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)
        at HTMLUnknownElementImpl._dispatch (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
        at HTMLUnknownElementImpl.dispatchEvent (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
        at HTMLUnknownElement.dispatchEvent (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:241:34)
        at Object.invokeGuardedCallbackDev (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:4213:16)
        at invokeGuardedCallback (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:4277:31)
        at reportUncaughtErrorInDEV (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:22877:5)
        at captureCommitPhaseError (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:27165:5)
        at commitPassiveMountEffects_complete (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:24932:9)
        at commitPassiveMountEffects_begin (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:24917:7)
        at commitPassiveMountEffects (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:24905:3)
        at flushPassiveEffectsImpl (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:27078:3)
        at flushPassiveEffects (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:27023:14)
        at E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:26808:9
        at flushActQueue (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react\cjs\react.development.js:2667:24)
        at act (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react\cjs\react.development.js:2582:11)
        at E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\@testing-library\react\dist\act-compat.js:47:25
        at renderRoot (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\@testing-library\react\dist\pure.js:180:26)
        at render (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\@testing-library\react\dist\pure.js:271:10)
        at Object.<anonymous> (E:\Dropbox\Potty Snitch\Repos\potty.snitch\src\App.test.js:34:9)
        at Promise.then.completed (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\utils.js:298:28)
        at new Promise (<anonymous>)
        at callAsyncCircusFn (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\utils.js:231:10)
        at _callCircusTest (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\run.js:316:40)
        at processTicksAndRejections (node:internal/process/task_queues:95:5)
        at _runTest (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\run.js:252:3)
        at _runTestsForDescribeBlock (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\run.js:126:9)
        at run (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\run.js:71:3)
        at runAndTransformResultsToJestFormat (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:122:21)
        at jestAdapter (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapter.js:79:19)
        at runTestInternal (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-runner\build\runTest.js:367:16)
        at runTest (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-runner\build\runTest.js:444:34) {
      detail: TypeError: window.google.maps.Marker is not a constructor
          at initMap (E:\Dropbox\Potty Snitch\Repos\potty.snitch\src\components\Map.js:52:7)
          at initMap (E:\Dropbox\Potty Snitch\Repos\potty.snitch\src\components\Map.js:22:9)
          at loadGoogleMaps (E:\Dropbox\Potty Snitch\Repos\potty.snitch\src\components\Map.js:95:5)
          at commitHookEffectListMount (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:23189:26)
          at commitPassiveMountOnFiber (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:24970:11)
          at commitPassiveMountEffects_complete (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:24930:9)
          at commitPassiveMountEffects_begin (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:24917:7)
          at commitPassiveMountEffects (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:24905:3)
          at flushPassiveEffectsImpl (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:27078:3)
          at flushPassiveEffects (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:27023:14)
          at E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react-dom\cjs\react-dom.development.js:26808:9
          at flushActQueue (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react\cjs\react.development.js:2667:24)
          at act (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\react\cjs\react.development.js:2582:11)
          at E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\@testing-library\react\dist\act-compat.js:47:25
          at renderRoot (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\@testing-library\react\dist\pure.js:180:26)
          at render (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\@testing-library\react\dist\pure.js:271:10)
          at Object.<anonymous> (E:\Dropbox\Potty Snitch\Repos\potty.snitch\src\App.test.js:34:9)
          at Promise.then.completed (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\utils.js:298:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\utils.js:231:10)
          at _callCircusTest (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\run.js:316:40)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at _runTest (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\run.js:252:3)
          at _runTestsForDescribeBlock (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\run.js:126:9)
          at run (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\run.js:71:3)
          at runAndTransformResultsToJestFormat (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:122:21)
          at jestAdapter (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapter.js:79:19)
          at runTestInternal (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-runner\build\runTest.js:367:16)
          at runTest (E:\Dropbox\Potty Snitch\Repos\potty.snitch\node_modules\jest-runner\build\runTest.js:444:34),
      type: 'unhandled exception'
    }

      32 |   const mockUserLocation = { lat: 40.748817, lng: -73.985428 }; // Replace with appropriate values
      33 |
    > 34 |   render(<App userLocation={mockUserLocation} />);
         |         ^
      35 |
      36 |   const linkElement = screen.getByText(/learn react/i);
      37 |   expect(linkElement).toBeInTheDocument();

      at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at reportUncaughtErrorInDEV (node_modules/react-dom/cjs/react-dom.development.js:22877:5)
      at captureCommitPhaseError (node_modules/react-dom/cjs/react-dom.development.js:27165:5)
      at commitPassiveMountEffects_complete (node_modules/react-dom/cjs/react-dom.development.js:24932:9)
      at commitPassiveMountEffects_begin (node_modules/react-dom/cjs/react-dom.development.js:24917:7)
      at commitPassiveMountEffects (node_modules/react-dom/cjs/react-dom.development.js:24905:3)
      at flushPassiveEffectsImpl (node_modules/react-dom/cjs/react-dom.development.js:27078:3)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom.development.js:27023:14)
      at node_modules/react-dom/cjs/react-dom.development.js:26808:9
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/App.test.js:34:9)

  console.error
    The above error occurred in the <Map> component:

        at userLocation (E:\Dropbox\Potty Snitch\Repos\potty.snitch\src\components\Map.js:4:16)
        at div
        at div
        at div
        at userLocation (E:\Dropbox\Potty Snitch\Repos\potty.snitch\src\components\MainLayout.js:7:23)
        at div
        at App (E:\Dropbox\Potty Snitch\Repos\potty.snitch\src\App.js:8:51)

    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

      32 |   const mockUserLocation = { lat: 40.748817, lng: -73.985428 }; // Replace with appropriate values
      33 |
    > 34 |   render(<App userLocation={mockUserLocation} />);
         |         ^
      35 |
      36 |   const linkElement = screen.getByText(/learn react/i);
      37 |   expect(linkElement).toBeInTheDocument();

      at logCapturedError (node_modules/react-dom/cjs/react-dom.development.js:18704:23)
      at update.callback (node_modules/react-dom/cjs/react-dom.development.js:18737:5)
      at callCallback (node_modules/react-dom/cjs/react-dom.development.js:15036:12)
      at commitUpdateQueue (node_modules/react-dom/cjs/react-dom.development.js:15057:9)
      at commitLayoutEffectOnFiber (node_modules/react-dom/cjs/react-dom.development.js:23430:13)
      at commitLayoutMountEffects_complete (node_modules/react-dom/cjs/react-dom.development.js:24727:9)
      at commitLayoutEffects_begin (node_modules/react-dom/cjs/react-dom.development.js:24713:7)
      at commitLayoutEffects (node_modules/react-dom/cjs/react-dom.development.js:24651:3)
      at commitRootImpl (node_modules/react-dom/cjs/react-dom.development.js:26862:5)
      at commitRoot (node_modules/react-dom/cjs/react-dom.development.js:26721:5)
      at performSyncWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:26156:3)
      at flushSyncCallbacks (node_modules/react-dom/cjs/react-dom.development.js:12042:22)
      at flushPassiveEffectsImpl (node_modules/react-dom/cjs/react-dom.development.js:27099:3)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom.development.js:27023:14)
      at node_modules/react-dom/cjs/react-dom.development.js:26808:9
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/App.test.js:34:9)

 FAIL  src/App.test.js
  × renders learn react link (187 ms)
                                                                                                                                                                                                                                                                              
  ● renders learn react link                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                              
    TypeError: window.google.maps.Marker is not a constructor

      50 |
      51 |       // Add a user location marker
    > 52 |       new window.google.maps.Marker({
         |       ^
      53 |         position: userLocation,
      54 |         map: newMap,
      55 |         title: 'You are here!',

      at initMap (src/components/Map.js:52:7)
      at initMap (src/components/Map.js:22:9)
      at loadGoogleMaps (src/components/Map.js:95:5)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom.development.js:23189:26)
      at commitPassiveMountOnFiber (node_modules/react-dom/cjs/react-dom.development.js:24970:11)
      at commitPassiveMountEffects_complete (node_modules/react-dom/cjs/react-dom.development.js:24930:9)
      at commitPassiveMountEffects_begin (node_modules/react-dom/cjs/react-dom.development.js:24917:7)
      at commitPassiveMountEffects (node_modules/react-dom/cjs/react-dom.development.js:24905:3)
      at flushPassiveEffectsImpl (node_modules/react-dom/cjs/react-dom.development.js:27078:3)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom.development.js:27023:14)
      at node_modules/react-dom/cjs/react-dom.development.js:26808:9
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/App.test.js:34:9)

----------------|---------|----------|---------|---------|---------------------------------------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                                                                                                                                                  
----------------|---------|----------|---------|---------|---------------------------------------------------
All files       |   52.25 |    36.36 |   48.38 |   54.71 | 
 src            |   76.47 |      100 |   66.66 |   81.25 | 
  App.js        |   71.42 |      100 |   66.66 |   76.92 | 20,27-28
  firebase.js   |     100 |      100 |     100 |     100 | 
 src/components |   47.87 |    36.36 |      44 |      50 | 
  Form.js       |      46 |       50 |   35.71 |      50 | 24-25,31-32,40-41,53-61,78-79,84-85,92-97,135-151
  List.js       |     100 |      100 |     100 |     100 | 
  MainLayout.js |     100 |      100 |     100 |     100 | 
  Map.js        |      45 |       25 |   44.44 |      45 | 13-20,59-90,99-104
----------------|---------|----------|---------|---------|---------------------------------------------------
Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.076 s
Ran all test suites.
