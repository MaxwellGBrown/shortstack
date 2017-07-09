from pyramid.testing import DummyRequest
import pytest  # noqa


def test_index():
    from shortstack_app.views import index

    request = DummyRequest()

    response = index(request)
    assert response.text == 'Shortstack Backend'
