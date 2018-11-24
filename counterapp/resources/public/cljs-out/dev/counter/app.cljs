(ns ^:figwheel-hooks counter.app
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [ajax.core :refer [GET POST]]))

(defonce base-url "http://localhost:3000/counter")

(defonce message (atom "loading..."))

(defn set-message [msg]
  (println msg)
  (reset! message (:msg msg)))

(defn load-the-counter []
  (GET base-url {:handler set-message
                  :response-format :json
                  :keywords? true}))


;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn multiply [x y]
  (* x y))

(defn get-app-element []
  (gdom/getElement "app"))

(defn inc-it [c]
  (reset! message (:msg c)))

(defn dec-it [c]
  (reset! message (:msg c)))

(defn inc-handler []
  (POST (str base-url "/inc") {:params {}
                               :response-format :json
                               :keywords? true
                               :handler inc-it}))

(defn dec-handler []
  (POST (str base-url "/dec") {:params {}
                               :response-format :json
                               :keywords? true
                               :handler dec-it}))

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:p (str "Count: " @message)]
   [:button {:on-click inc-handler} "+" ]
   [:button {:on-click dec-handler} "-"]])

(defn mount [el]
  (load-the-counter)
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
