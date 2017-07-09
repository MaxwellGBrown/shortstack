from setuptools import setup


with open('requirements.txt') as requirements_file:
    requires = requirements_file.read().splitlines()


setup(
    name="shortstack_app",
    install_requires=requires,
    entry_points="""\
    [paste.app_factory]
    main = shortstack_app.config:main
    """
)
