shortstack
==========

A baseplate "short stack" of a full stack application; frontend and backend.

Backend is a python API implemented w/ pyramid & sqlalchemy.

Frontend is a JavaScript frontend app implemented w/ React & Sass.

Quickstart
==========

.. code-block::

  $ docker-compose build

  # Since volumes are mounted after containers are built, gotta setup the volumes
  $ docker-compose run shortstack-backend python setup.py install
  $ docker-compose run shortstack-frontend npm install

  $ docker-compose run shortstack-frontend npm run webpack

  $ docker-compose up -d


Tests
=====

Tests suites are included!

Backend Tests
-------------

While the ``shortstack-backend`` container is running...

.. code-block::

  $ docker exec -it shorstack-backend py.test


Frontend Tests
--------------

While the ``shortstack-frontend`` container is running...

.. code-block::

  $ docker exec -it shortstack-frontend npm run test
