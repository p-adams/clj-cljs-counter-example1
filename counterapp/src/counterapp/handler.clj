(ns counterapp.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.util.response :refer [response resource-response]]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.cors :refer [wrap-cors]]))

(defonce counter (atom 0))

(defn counter-response [state]
  (response {:msg state}))

(defn handle-counter [f]
  (swap! counter f)
    (response {:msg @counter}))



(defroutes app-routes
  (GET "/counter" [] (counter-response @counter))
  (POST "/counter/inc" [] (handle-counter inc))
  (POST "/counter/dec" [] (handle-counter dec))
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (route/not-found "Not Found"))

(def app
  (-> (wrap-cors app-routes :access-control-allow-origin [#"http://localhost:9500"] :access-control-allow-methods [:get :post])
  (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))
  (wrap-json-response)))
