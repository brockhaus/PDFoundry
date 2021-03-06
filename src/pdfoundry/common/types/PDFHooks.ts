/* Copyright 2020 Andrew Cuccinello
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * PDF events are fired at specific times in the viewer, such as user interaction or window state changes.
 * @moduledefinition Events
 */

/**
 * All available PDF Viewer events.
 * @module Events
 */
export type PDFViewerEvent = PDFViewerWindowEvent | PDFViewerInteractionEvent;

/**
 * Interaction events fire when the user interacts with the viewer in some way.
 * @module Events
 */
export type PDFViewerInteractionEvent = PDFViewerPageRenderedEvent | PDFViewerPageChangingEvent | PDFViewerViewAreaUpdatedEvent | PDFViewerScaleChangingEvent;

/**
 * Fires when new page is loaded from memory and rendered onto the DOM.
 * @module Events
 */
export type PDFViewerPageRenderedEvent = 'pageRendered';
/**
 * Fires when a page is changed via scrolling of the viewer.
 * @module Events
 */
export type PDFViewerPageChangingEvent = 'pageChanging';
/**
 * Fires when the view area is updated either via scrolling or zooming.
 * @module Events
 */
export type PDFViewerViewAreaUpdatedEvent = 'viewAreaUpdated';
/**
 * Fires when the view area is changed via zooming.
 * @module Events
 */
export type PDFViewerScaleChangingEvent = 'scaleChanging';

/**
 * Meta events that occur on a PDF Viewer that relate to the state of the application.
 * @module Events
 */
export type PDFViewerWindowEvent = PDFViewerOpening | PDFViewerOpened | PDFViewerClosed | PDFViewerClosing | PDFViewerReady;

/**
 * Fires when a viewer begins opening.
 * @module Events
 */
export type PDFViewerOpening = 'viewerOpening';
/**
 * Fires when a viewer finishes opening, but is not ready for use. Foundry VTT methods are usable at this point.
 * @module Events
 */
export type PDFViewerOpened = 'viewerOpened';
/**
 * Fires when the viewer begins closing.
 * @module Events
 */
export type PDFViewerClosing = 'viewerClosing';
/**
 * Fires right before the viewer is deleted. This is the last event that will fire.
 * @module Events
 */
export type PDFViewerClosed = 'viewerClosed';
/**
 * Fires when the viewer is ready for use.
 * @module Events
 */
export type PDFViewerReady = 'viewerReady';
