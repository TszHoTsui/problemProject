FROM nginx:alpine
EXPOSE 80
COPY ./dist /usr/share/nginx/html/bm-wisdom-brain
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/
