steps = [
    # [
    #     # "Up" SQL statement
    #     """
    #     CREATE TABLE dummy (
    #         id SERIAL PRIMARY KEY NOT NULL,
    #         required_limited_text VARCHAR(1000) NOT NULL,
    #         required_unlimited_text TEXT NOT NULL,
    #         required_date_time TIMESTAMP NOT NULL,
    #         automatically_set_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    #         required_integer INTEGER NOT NULL,
    #         required_money MONEY NOT NULL
    #     );
    #     """,
    #     # "Down" SQL statement
    #     """
    #     DROP TABLE dummy;
    #     """
    # ],
    # [
    #     # "Up" SQL statement
    #     """
    #     CREATE TABLE big_dummy (
    #         id SERIAL PRIMARY KEY NOT NULL,
    #         required_limited_text VARCHAR(1000) NOT NULL,
    #         required_unlimited_text TEXT NOT NULL,
    #         required_date_time TIMESTAMP NOT NULL,
    #         automatically_set_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    #         required_integer INTEGER NOT NULL,
    #         required_money MONEY NOT NULL
    #     );
    #     """,
    #     # "Down" SQL statement
    #     """
    #     DROP TABLE big_dummy;
    #     """
    # ],
    [
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(200) NOT NULL,
            last_name VARCHAR(200) NOT NULL,
            email VARCHAR(200) NOT NULL,
            username VARCHAR(200) NOT NULL UNIQUE,
            hashed_password VARCHAR(500) NOT NULL

        );
        """,
        """
        DROP TABLE accounts;
        """,
    ],
    [
        """
        CREATE TABLE reviews (
            id SERIAL PRIMARY KEY NOT NULL,
            movie_id BIGINT NOT NULL,
            display_name VARCHAR(200) NOT NULL,
            rating FLOAT NOT NULL,
            comments TEXT NOT NULL

        );
        """,

        """
        DROP TABLE reviews;
        """,
    ]
]
