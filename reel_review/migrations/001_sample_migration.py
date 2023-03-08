steps = [
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
    ],
]
