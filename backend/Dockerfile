FROM python:3.5

ADD . /shortstack-backend
VOLUME /shortstack-backend
WORKDIR /shortstack-backend

RUN pip install -e /shortstack-backend

SHELL ["/bin/bash"]
CMD ["gunicorn", "--paste", "development.ini", "--reload"]
